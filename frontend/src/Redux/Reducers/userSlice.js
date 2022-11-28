import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const url = "http://localhost:5000/users";

const initialState = {
  users: [],
};
export const getUser = createAsyncThunk("users", async (data) => {
  const response=await axios.post(`${url}/login`, data).then((data) => {
    console.log(data);
  });
  return response
});
export const addusers = createAsyncThunk("register", async (data) => {
  console.log(data);
  const response = await axios
    .post(`${url}/signup`, data)
    .then((data) => data.json());
  return response;
});

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: {},
});

const userReducer = userSlice.reducer;

export default userReducer;
