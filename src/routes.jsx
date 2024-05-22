import React from "react";
import { Routes, Route } from "react-router-dom";
import { Categories } from "./views/categories";
import { AllSales } from "./views/all-sales";
import { Main } from "./views/main";
import { Layout } from "./views/layout";
import { NotFound } from "./views/not-found";
import { AllProducts } from "./views/all-products";
import { Product } from "./views/product";
import { ShoppingCart } from "./views/shopping-cart";

export const RootRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />} />
        <Route path="categories/*" element={<Categories elementsCount={5}/>} />
        <Route path="all-products" element={<AllProducts />} />
        <Route path="all-sales" element={<AllSales />} />
        <Route path='products/:itemId' element={<Product/>} />
        <Route path="*" element={<NotFound />} />
        <Route path="shopping-cart" element={<ShoppingCart />} />
      </Route>
    </Routes>
  );
};
