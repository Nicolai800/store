import { configureStore } from "@reduxjs/toolkit";
import shopReducer from './shop-slice'
import likeReducer from "./like-slicel"
import cartReducer from "./cart-slice"

export const store = configureStore({
  reducer: {
    shop: shopReducer,
    like: likeReducer,
    cart: cartReducer
  },
});
