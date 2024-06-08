export const sortItems = (sortOrder, items = []) => {
   return [...items].sort((a, b) => {
        if (sortOrder === "price: high-low") {
          return b.price - a.price;
        } else if (sortOrder === "price: low-high") {
          return a.price - b.price;
        } else if (sortOrder === "newest") {
          return new Date(b.updatedAt) - new Date(a.updatedAt);
        } else {
          return a.id - b.id;
        }
      })
}