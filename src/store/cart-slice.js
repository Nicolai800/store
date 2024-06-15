import { createSlice } from "@reduxjs/toolkit";
import { sendOrderData } from "./async-actions";

const cardItems = createSlice({
  name: "card",
  initialState: {
    cardsData: {},
  },
  reducers: {
    toggleCartItem: (state, { payload }) => {
      state.cardsData[payload] = Number(!state.cardsData[payload]);
    },
    deleteCardItem: (state, { payload }) => {
      state.cardsData[payload] = 0;
    },
    addToCart: (state, { payload }) => {
      !state.cardsData[payload]
        ? (state.cardsData[payload] = 1)
        : (state.cardsData[payload] += 1);
    },
    deleteFromCart: (state, { payload }) => {
      state.cardsData[payload]--;
      if (state.cardsData[payload] === 0) return;
    },
    setProductCart: (state, { payload }) => {
      const { productCounter, id } = payload;
      state.cardsData[id] = productCounter;
    },
    clearCardsData: (state) => {
      state.cardsData = {}
    }
  },


});

export const { toggleCartItem, deleteCardItem, addToCart, deleteFromCart, setProductCart, clearCardsData } =
  cardItems.actions;

export default cardItems.reducer;

