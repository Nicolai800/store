import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../constants";


export const fetchAllItems = createAsyncThunk(
  "shop/fetchAllItems",
  async (_, thunkApi) => {
    try {
      const rawData = await fetch(`${BASE_URL}/products/all`);
      const data = await rawData.json();
      return thunkApi.fulfillWithValue(data);
    } catch (err) {
      return thunkApi.rejectWithValue(err);
    }
  }
);

export const fetchCategory = createAsyncThunk(
  "shop/fetchCategory",
  async (categoryId, thunkApi) => {
    try {
      const rawData = await fetch(`${BASE_URL}/categories/${categoryId}`);
      const data = await rawData.json();
      return thunkApi.fulfillWithValue(data);
    } catch (err) {
      return thunkApi.rejectWithValue(err);
    }
  }
);


export const fetchAllCategories = createAsyncThunk(
  "shop/fetchAllCategories",
  async (_, thunkApi) => {
    try {
      const rawData = await fetch(`${BASE_URL}/categories/all`);
      const data = await rawData.json();
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
      const serverResponse = await fetch(`${BASE_URL}/sale/send`, {method: 'POST', body: JSON.stringify(formData)});
      const data = await serverResponse.json();
      return thunkApi.fulfillWithValue(data);
    } catch (err) {
      return thunkApi.rejectWithValue(err);
    }
  }
);
export const sendOrderData = createAsyncThunk(
  "shop/sendOrderData",
  async (formData, thunkApi) => {
    try {
      const serverResponse = await fetch(`${BASE_URL}/order/send`, {method: 'POST', body: JSON.stringify(formData)});
      const data = await serverResponse.json();
      return thunkApi.fulfillWithValue(data);
    } catch (err) {
      return thunkApi.rejectWithValue(err);
    }
  }
);
