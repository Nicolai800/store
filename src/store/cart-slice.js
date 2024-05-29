import { createSlice } from "@reduxjs/toolkit";

const cardItems = createSlice({
  name: "card",
  initialState: {
    cardsData: {},
    orderdata: []
  },
  reducers: {
    toggleCartItem: (state, { payload: articul }) => {
      state.cardsData[articul] = !state.cardsData[articul];
    },
    deleteCard: (state, { payload: articul }) => {
      state.cardsData[articul] = false;
    },
  },
});

export const { toggleCartItem, deleteCard } = cardItems.actions;

export default cardItems.reducer;

// const cardItems = createSlice({
//   name: "card",
//   initialState: {
//     selectedData: {},
//     goodsData: {},
//     counter: 0,
//     cardId: null,
//   },

//   reducers: {
//     toggleCartItem: (state, { payload }) => {
//       const { articul, select } = payload;
//       if (!state.selectedData[select]) {
//         state.selectedData[select] = "selected";
//         state.goodsData[articul] += 1;
//         if (!state.goodsData[articul]) {
//           state.goodsData[articul] = 1;
//         }
//         state.counter++;
//       } else if ((state.selectedData[select] = "selected")) {
//         delete state.selectedData[select];
//         state.goodsData[articul] -= 1;
//         state.counter--;
//       }
//     },
//   },
// });

// export const {toggleCartItem} = cardItems.actions;
// export default cardItems.reducer;
