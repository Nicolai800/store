import { getDiscountPercent } from "../utils/getDiscountPercent";

export const getAllItems = (state) => state.shop.items;
export const getIsLoading = (state) => state.shop.isLoading;

export const getError = (state) => state.shop.error;

export const getAllCategories = (state) => state.shop.categories;

export const getDiscountStatus = (state) => state.shop.discountApplied;

export const getOrderStatus = (state) => state.shop.orderIsSend;

export const getCardsData = (state) => state.cart.cardsData;


export const getLikedCount = (state) => {
  return Object.values(state.shop.likesData).filter((val)=>val).length;
};
export const getCardCount = (state) => {
  return Object.values(state.cart.cardsData).filter((val)=>val).length;
};

export const getProductById = (state, itemId) =>
  state.shop.items.find((item) => String(item.id) === itemId);

export const getDiscountItems = (state) => {
  const items = [...state.shop.items];

  return items
    .sort(
      (elem, elem2) =>
        getDiscountPercent(elem2.price, elem2.discont_price) -
        getDiscountPercent(elem.price, elem.discont_price)
    )
    .filter(({ discont_price }, index) => discont_price !== null && index < 4);
};

export const getCategoryItems = (state) => state.shop.categoryItems;
