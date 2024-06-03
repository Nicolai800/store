import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../constants";
import { setItems } from "./shop-slice";
import { setCategory } from "./shop-slice";

export const getAllItems = createAsyncThunk(
  "shop/getAllItems",
  async (_, thunkApi) => {
    try {
      const rawData = await fetch(`${BASE_URL}/products/all`);
      const data = await rawData.json();
      thunkApi.dispatch(setItems(data));
      return thunkApi.fulfillWithValue(data);
    } catch (err) {
      return thunkApi.rejectWithValue(err);
    }
  }
);

export const getAllCategories = createAsyncThunk(
  "shop/getAllCategories",
  async (_, thunkApi) => {
    try {
      const rawData = await fetch(`${BASE_URL}/categories/all`);
      const data = await rawData.json();
      //thunkApi.dispatch(setCategory(data));
      return thunkApi.fulfillWithValue(data);
    } catch (err) {
      return thunkApi.rejectWithValue(err);
    }
  }
);

export const sendSaleData = createAsyncThunk(
  "shop/sendSaleData",
  async (formData, thunkApi) => {
    try {
      const serverResponse = await fetch(`${BASE_URL}/sale/send`, {method: 'POST', body: JSON.stringify});
      const data = await serverResponse.json();
      return thunkApi.fulfillWithValue(data);
    } catch (err) {
      return thunkApi.rejectWithValue(err);
    }
  }
);
