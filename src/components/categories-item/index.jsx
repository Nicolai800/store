import React from "react";
import styles from "./indes.module.scss";
import { BASE_URL } from "../../constants";
import {useParams, useSearchParams} from 'react-router-dom';

export const CategoriesItem = ({title, image}) => {
  const {categoryId} = useParams();
  const [params] = useSearchParams();
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
