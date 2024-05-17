import React from "react";
import styles from "./indes.module.scss";
import { BASE_URL } from "../../constants";
import { Link } from "react-router-dom";
import cn from "classnames";
import { themeContext } from "../../context/theme";

export const CategoriesItem = ({ title, image, id }) => {
  // const { theme } = useContext(themeContext);
  return (
    <Link to={`/categories/${id}`}>
      {" "}
      <div className={styles.categoriesItemWrapper}>
        <img
          src={BASE_URL + image}
          alt="categories image"
          className={styles.categoriesImage}
        />
        <div className={styles.categoriesTitle}>{title}</div>
      </div>{" "}
    </Link>
  );
};
