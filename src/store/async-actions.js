import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../constants";

export const getAllItems = createAsyncThunk('shop/getAllitems', async (_, thunkApi)=> {

    const rawData = await fetch(`${BASE_URL}/products/all`);
    const data = await rawData.json();
})