import {createSlice} from '@reduxjs/toolkit';
import { fetchAllItems, fetchAllCategories, sendSaleData } from './async-actions';

const initialState = {
    category: null,
    items: [],
    isLoading: false,
    likesData: {},
    error: null,
    categories: [],
    discountApplied: false,
};

const shopSlice = createSlice({
    name: "shop",
    initialState,
    reducers: {
        setItems: (state, {payload}) => {
            state.items = payload;
        },
        setCategory: (state, {payload}) => {
            state.categories = payload;
        },
        setIsLoading: (state, {payload}) => {
            state.isLoading = payload;
        },
        toggleToLikes: (state, { payload : articul }) => {
            state.likesData[articul] = !state.likesData[articul];
          },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAllItems.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(fetchAllItems.fulfilled, (state, {payload}) => {
            state.isLoading = false;
            state.items = payload;
        })
        builder.addCase(fetchAllItems.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        })
        builder.addCase(fetchAllCategories.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(fetchAllCategories.fulfilled, (state, {payload}) => {
            state.isLoading = false;
            state.categories = payload;
        })
        builder.addCase(fetchAllCategories.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        })
        builder.addCase(sendSaleData.fulfilled, (state, action) => {
            state.isLoading = false;
            if (action.payload.status === 'OK'){
                state.discountApplied = true;
            }
        })
    }
});


export const {setItems, setCategory, setIsLoading, toggleToLikes} = shopSlice.actions;

export default shopSlice.reducer;

