import React from "react";
import styles from "./indes.module.scss";
import { BASE_URL } from "../../constants";

export const CategoriesItem = (title, image) => {
  return (
    <div className={styles.categoriesItemWrapper}>
      <img
        src={BASE_URL + image}
        alt="categories image"
        className={styles.categoriesImage}
      />
      <div className={styles.categoriesTitle}>{title}</div>
    </div>
  );
};
