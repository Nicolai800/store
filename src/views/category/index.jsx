import React, { useEffect, useState, useContext, useMemo } from "react";
import { useParams } from "react-router-dom";
import { CardItem } from "../../components/card-item";
import styles from "./index.module.scss";
import { getDiscountPercent } from "../../utils/getDiscountPercent";
import cn from "classnames";
import { themeContext } from "../../context/theme";
import { Link } from "react-router-dom";
import { fetchAllItems, fetchAllCategories } from "../../store/async-actions";
import { useDispatch } from "react-redux";
import { fetchCategoryItems } from "../../utils/fetchers/fetch-category-items";
import { sortItems } from "../../utils/sortItems";
import { filterItems } from "../../utils/filterItems";

export const Category = () => {
  const { categoryId } = useParams();
  const dispatch = useDispatch();
  const [categoryItemsObj, setCategoryItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    dispatch(fetchAllItems());
    dispatch(fetchAllCategories());
  }, [dispatch, categoryId]);

  const { theme } = useContext(themeContext);

  useEffect(() => {
    setIsLoading(true);
    fetchCategoryItems(categoryId).then((data) => {
      setCategoryItems(data);
      setIsLoading(false);
    });
  }, [categoryId]);

  const [isChecked, setIsChecked] = useState(false);
  const [sortOrder, setSortOrder] = useState("by default");
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(0);

  const minValueChange = (event) => {
    setMinValue(event.target.value);
  };
  const maxValueChange = (event) => {
    setMaxValue(event.target.value);
  };

  const sortChange = (event) => {
    setSortOrder(event.target.value);
  };

  const sortedItems = useMemo(
    () => sortItems(sortOrder, categoryItemsObj.data),
    [sortOrder, categoryItemsObj]
  );

  const checkboxChange = (event) => {
    setIsChecked(event.target.checked);
  };
  const filteredAndSortedItems = useMemo(
    () => filterItems(minValue, maxValue, sortedItems),
    [minValue, maxValue, sortedItems]
  );

  return isLoading ? (
    <h1>LOADING</h1>
  ) : (
    <>
      <div
        className={cn(styles.breadCrumbs, {
          [styles.dark]: theme === "dark",
        })}
      >
        <Link to={"/"}>
          <div>Main Page</div>
        </Link>
        <hr />
        <Link to={"/categories"}>
          <div>Categories</div>
        </Link>
        <hr />
        <div>{categoryItemsObj.category?.title}</div>
      </div>
      <h2
        className={cn(styles.categoryTitle, {
          [styles.dark]: theme === "dark",
        })}
      >
        {categoryItemsObj.category?.title}
      </h2>
      <div
        className={cn(styles.allProductInputsWrapper, {
          [styles.dark]: theme === "dark",
        })}
      >
        {" "}
        <div>
          {" "}
          <span>Price</span>{" "}
          <input
            type="number"
            placeholder="from"
            onChange={minValueChange}
            className={styles.priceInputs}
          />{" "}
          <input
            type="number"
            placeholder="to"
            onChange={maxValueChange}
            className={styles.priceInputs}
          />
        </div>
        <div>
          <span>Discounted items </span>{" "}
          <input
            type="checkbox"
            checked={isChecked}
            onChange={checkboxChange}
            className={styles.checkBoxDiscounted}
          />
        </div>
        <div>
          <span>Sorted</span>
          <select id={styles.sortedForm} onChange={sortChange}>
            <option value="by default">by default</option>
            <option value="newest">newest</option>
            <option value="price: high-low">price: high-low</option>
            <option value="price: low-high">price: low-high</option>
          </select>
        </div>
      </div>

      <div
        className={cn(styles.categoryWrapper, {
          [styles.dark]: theme === "dark",
        })}
      >
        {(isChecked === true
          ? filteredAndSortedItems.filter(
              ({ discont_price }) => discont_price !== null
            )
          : filteredAndSortedItems
        ).map(({ price, discont_price, title, image, id, categoryId }) => (
          <CardItem
            key={id}
            price={price}
            discont={discont_price === null ? price : discont_price}
            discontPercent={getDiscountPercent(price, discont_price)}
            title={title}
            image={image}
            id={id}
            categoryId={categoryId}
          />
        ))}
      </div>
    </>
  );
};
