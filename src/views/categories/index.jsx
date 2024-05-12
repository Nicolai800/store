import React, { useState, useEffect } from "react";
import { BASE_URL } from "../../constants";
import { CategoriesItem } from "../../components/categories-item";
import styles from "./index.module.scss";
import { Link } from "react-router-dom";
import { Route, Routes } from "react-router-dom";

export const Categories = ({ elementsCount = 4 }) => {
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

  const filterItem = categoriesItems.filter((item, index) => {
    if (index < elementsCount) {
      return true;
    } else {
      return false;
    }
  });

  return (
    <>
    <h2>Categories</h2>
      <div className={styles.categories}>
        {filterItem.map(({ image, id, title }) => (
          <Link><CategoriesItem image={image} title={title} key={id} /></Link>
        ))}
      </div>
    </>
  );
};
