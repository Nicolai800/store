export const getDiscountPercent = (price, discountPrice) => {
  if (discountPrice === null) {
    return 0;
  }
  return Number(100 - (discountPrice / price * 100)).toFixed(2);
};
