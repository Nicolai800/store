import {createSlice} from '@reduxjs/toolkit';
import { getAllItems, getAllCategories, sendSaleData } from './async-actions';

const initialState = {
    category: null,
    items: [],
    isLoading: false,
    likesData: {},
    error: null,
    categories: null,
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
            state.category = payload;
        },
        setIsLoading: (state, {payload}) => {
            state.isLoading = payload;
        },
        toggleToLikes: (state, { payload : articul }) => {
            state.likesData[articul] = !state.likesData[articul];
          },
    },
    extraReducers: (builder) => {
        builder.addCase(getAllItems.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(getAllItems.fulfilled, (state, {payload}) => {
            state.isLoading = false;
            state.items = payload;
        })
        builder.addCase(getAllItems.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        })
        builder.addCase(getAllCategories.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(getAllCategories.fulfilled, (state, {payload}) => {
            state.isLoading = false;
            state.categories = payload;
        })
        builder.addCase(getAllCategories.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        })
        builder.addCase(sendSaleData.rejected, (state, action) => {
            state.isLoading = false;
            if (action.payload.status === 'OK'){
                state.discountApplied = true;
            }
        })
    }
});


export const {setItems, setCategory, setIsLoading, toggleToLikes} = shopSlice.actions;

export default shopSlice.reducer;

