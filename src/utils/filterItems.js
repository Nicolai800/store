export const filterItems = (minValue, maxValue, sortedItems) => {
  if (!minValue && !maxValue) {
    return sortedItems;
  }
  return sortedItems
    .filter((item) => item.price >= minValue && item.price <= maxValue)
    .sort((a, b) => a.price - b.price);
};
