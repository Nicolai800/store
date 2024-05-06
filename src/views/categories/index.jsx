import React, { useState, useEffect } from "react";
import { BASE_URL } from "../../constants";
import { CategoriesItem } from "../../components/categories-item";
import styles from "./index.module.scss";

export const Categories = () => {

  return (
    <h1>Categories</h1>
  )

  const [categoriesItems, setCategoriesItems] = useState([]);

  useEffect(() => {
    fetch(`${BASE_URL}/categories/all`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setCategoriesItems(data);
      });
  }, []);

  console.log(categoriesItems); // Получаю массив из пяти элементов!!!
  return (
    <div className={styles.categories}>
      <h1>Categories</h1>
      {categoriesItems.map(({ image, id, title }) => (
        <CategoriesItem image={image} title={title} key={id} />
      ))}
    </div>
  );
};
