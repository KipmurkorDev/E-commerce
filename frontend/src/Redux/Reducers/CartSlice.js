import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const url = "http://localhost:5000/cart";

const initialState = {
  cartItem: [],
  Totalquantity: 0,
  TotalAmount: 0,
};
export const getCart = createAsyncThunk("carts", async () => {
  let cartItem = [];
  await axios.get(url).then((data) => {
    cartItem = [...data.data];
  });
  return cartItem;
});

export const addCart = createAsyncThunk(
  "postCart",
  async (data) => {
    let newData = { ...data, quantity: 1, amount: data.price };
    console.log(newData);
    const response = await axios.post(url, newData).then((data) => data.json());
    return response;
  },
  getCart()
);
export const updatCart = createAsyncThunk(
  "updatecart",
  async (data) => {
    const response = await axios
      .put(`${url}/${data.id_product}`, data)
      .then((data) => data.json());
    return response;
  },
  getCart()
);
export const deletCart = createAsyncThunk(
    "deletecart",
    async (id_product) => {
      const response = await axios
        .delete(`${url}/${id_product}`)
        .then((data) => data.json());
      return response;
    },
    getCart()
  );
export const clear = createAsyncThunk(
  "deletCart",
  async () => {
    const response = await axios
      .delete(url)
      .then((data) => data.json());
    return response;
  },
  getCart()
);

const cartSlice = createSlice({
  name: "carts",
  initialState,
  reducers: {},
  extraReducers: {
    [getCart.pending]: (state) => {
      state.loading = true;
    },
    [getCart.fulfilled]: (state, { payload }) => {
      console.log(payload);
      state.loading = false;
      state.cartItem = payload;
      console.log(state.cartItem);
    },
    [getCart.rejected]: (state) => {
      state.loading = false;
    },
    [addCart.fulfilled]: (state, action) => {
      state.cartItem.push(action.payload);
    },
  },
});

const cartReducer = cartSlice.reducer;

export default cartReducer;
