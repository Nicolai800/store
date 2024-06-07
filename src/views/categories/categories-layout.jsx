import React, { useState, useEffect, useContext } from "react";
import { BASE_URL } from "../../constants";
import { CategoriesItem } from "../../components/categories-item";
import styles from "./index.module.scss";
import cn from "classnames";
import { themeContext } from "../../context/theme";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  getAllCategories,
  getIsLoading,
  getError,
} from "../../store/selectors";
import { fetchAllItems, fetchAllCategories } from "../../store/async-actions";

export const CategoriesLayout = ({ elementsCount = 5, breadCrumbs = true }) => {
  const { theme } = useContext(themeContext);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchAllItems());
  //   dispatch(fetchAllCategories());
  // }, [dispatch]);

  //const categoriesItems = useSelector((state) => state.shop.categories);

  const categoriesItems = useSelector(getAllCategories);
  // const [categoriesItems, setCategoriesItems] = useState([]);

  //   useEffect(() => {
  //     fetch(`${BASE_URL}/categories/all`)
  //       .then((res) => {
  //         return res.json();
  //       })
  //       .then((data) => {
  //         setCategoriesItems(data);
  //       });
  //   }, []);

  const filterItem = categoriesItems.filter((item, index) => {
    if (index < elementsCount) {
      return true;
    } else {
      return false;
    }
  });

  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  if (error) {
    return <div>ERROR</div>;
  }

  return isLoading ? (
    <div className={styles.loading}>Loading... Please wait...</div>
  ) : (
    <>
      <div
        className={cn(styles.breadCrumbs, {
          [styles.dark]: theme === "dark",
          [styles.none]: breadCrumbs === false,
        })}
      >
        <Link to={"/"}>
          <div>Main Page</div>
        </Link>
        <hr />
        <div>Categories</div>
      </div>
      <div
        className={cn(styles.categoriesText, {
          [styles.dark]: theme === "dark",
        })}
      >
        <h2>Categories</h2>{" "}
        <div
          className={cn(styles.lineWrapper, {
            [styles.none]: breadCrumbs === true,
          })}
        >
          <hr />
          <Link to="/categories" className={styles.titleLink}>
            All categories
          </Link>
        </div>
      </div>
      <div
        className={cn(styles.categoriesLayout, {
          [styles.dark]: theme === "dark",
        })}
      >
        {filterItem.map(({ image, id, title }) => (
          <CategoriesItem image={image} title={title} key={id} id={id} />
        ))}
      </div>
      <div
        className={cn(styles.titleLinkMobileWrapper, {
          [styles.dark]: theme === "dark",
          [styles.none]: breadCrumbs === true,
        })}
      >
        <Link to="/categories" className={styles.titleLinkMobile}>
          All categories
        </Link>
      </div>
    </>
  );
};
