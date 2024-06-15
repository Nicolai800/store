import React, { useEffect, useContext } from "react";
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
import { fetchAllCategories } from "../../store/async-actions";

export const CategoriesLayout = ({ elementsCount = 5, breadCrumbs = true }) => {
  const { theme } = useContext(themeContext);
  const dispatch = useDispatch();
  const categoriesItems = useSelector(getAllCategories);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  useEffect(() => {
    if (!categoriesItems.length) {
      dispatch(fetchAllCategories());
    }
  }, [dispatch]);

  const filterItem = categoriesItems.filter((item, index) => {
    if (index < elementsCount) {
      return true;
    } else {
      return false;
    }
  });

  if (error) {
    return <div>ERROR</div>;
  }

  return isLoading ? (
    <div className={cn(styles.loading, {
      [styles.dark]: theme === "dark",
    })}>Loading... Please wait...</div>
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
