import { createSlice } from "@reduxjs/toolkit";

const cardItems = createSlice({
  name: "card",
  initialState: {
    cardsData: {},
  },
  reducers: {
    toggleCartItem: (state, { payload }) => {
      //state.cardsData[payload] = !state.cardsData[payload];
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
      //state.goodsData[id] = 0;
      state.cardsData[id] = productCounter;
    },
    clearProductCart:(state) => {
      state.cardsData = {}
    }
  },
});

export const { toggleCartItem, deleteCardItem, addToCart, deleteFromCart, setProductCart, clearProductCart } =
  cardItems.actions;

export default cardItems.reducer;

// const cartSlice = createSlice({
//   name: "cart",
//   initialstate: {
//     goodsData: {},
//   },

//   reducers: {
//     addToCart: (state, { payload }) => {
//       const { articul } = payload;
//       !state.goodsData[articul]
//         ? (state.goodsData[articul] = 1)
//         : (state.goodsData[articul] += 1);
//     },

//     deleteFromCart: (state, action) => {
//       const { articul } = action.payload;
//       state.goodsData[articul]--;
//       if (state.goodsData[articul] === 0) return;
//     },

//     deleteAllCart: (state, action) => {
//       const { articul } = action.payload;
//       state.goodsData[articul] = 0;
//     },
//     setProductCart: (state, { payload }) => {
//       const { productCounter, id } = payload;
//       state.goodsData[id] = 0;
//       state.goodsData[id] + productCounter;
//     },
//     toggleCartItem: (state, { payload }) => {
//       const { articul, select } = payload;
//       state.goodsData[select] = Number(!state.goodsData[select]);
//     },
//   },
// });

// export const {addToCart,deleteFromCart,setProductCart, toggleCartItem,deleteAllCart,toggleCartItem} = cartSlice.actions;
// export default cartSlice.reducer;
