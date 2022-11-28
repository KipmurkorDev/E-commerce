import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import authHeader from './authorHeaders'
const url = "http://localhost:5000/Products";





const initialState = {
  products: [],
};
export const getproducts = createAsyncThunk("Products", async () => {
  let products = [];
  const response= await axios.get(url, {headers:authHeader()}).then((data) =>data.data);
   products = [...response];
  return products;
});
export const addproducts = createAsyncThunk(
  "postProducts",
  async (data) => {
    const response = await axios.post(url, data).then((data) => data.json());
    return response;
  },
  getproducts()
);
export const deleProduct = createAsyncThunk(
  "postProducts",
  async (id_product) => {
    const response = await axios
      .delete(`${url}/${id_product}`)
      .then((data) => data.json());
    return response;
  },
  getproducts()
);
export const productsSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: {
    [getproducts.pending]: (state) => {
      state.loading = true;
    },
    [getproducts.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.products = payload;
      console.log(state);
    },
    [getproducts.rejected]: (state) => {
      state.loading = false;
    },
  },
});
const productReducer = productsSlice.reducer;
export default productReducer;
