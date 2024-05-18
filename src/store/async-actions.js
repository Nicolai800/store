import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../constants";
import { setItems } from "./shop-slice";

export const getAllItems = createAsyncThunk(
  "shop/getAllItems",
  async (_, thunkApi) => {
    const { dispatch } = thunkApi;

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
