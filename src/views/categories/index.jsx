import React from "react";
import { Routes, Route } from "react-router-dom";
import { CategoriesLayout } from "./categories-layout";
import { Category } from "../category";
import { Product } from "../product";

export const Categories = ({ elementsCount, breadCrumbs }) => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <CategoriesLayout
            elementsCount={elementsCount}
            breadCrumbs={breadCrumbs}
          />
        }
      />
      <Route path="/:categoryId/*" element={<Category />} />
      <Route path='/:categoryId/products/:itemId' element={<Product/>} />
    </Routes>
  );
};
