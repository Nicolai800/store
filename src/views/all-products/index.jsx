import React, { useState, useContext, useEffect, useMemo } from "react";
import { CardItem } from "../../components/card-item";
import styles from "./index.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getDiscountPercent } from "../../utils/getDiscountPercent";
import { themeContext } from "../../context/theme";
import cn from "classnames";
import { getError, getIsLoading } from "../../store/selectors";
import { fetchAllItems } from "../../store/async-actions";
import { sortItems } from "../../utils/sortItems";
import { filterItems } from "../../utils/filterItems";

export const AllProducts = () => {
  const dispatch = useDispatch();
  const allItems = useSelector((state) => state.shop.items);
  const { theme } = useContext(themeContext);
  const [isChecked, setIsChecked] = useState(false);
  const [sortOrder, setSortOrder] = useState("by default");
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(0);
  useEffect(() => {
    if (!allItems.length) {
      dispatch(fetchAllItems());
    }
  }, [dispatch]);

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
    () => sortItems(sortOrder, allItems),
    [sortOrder, allItems]
  );

  const filteredAndSortedItems = useMemo(
    () => filterItems(minValue, maxValue, sortedItems),
    [minValue, maxValue, sortedItems]
  );

  const checkboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

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
        })}
      >
        <Link to={"/"}>
          <div>Main Page</div>
        </Link>
        <hr />
        <div>All products</div>
      </div>
      <h2
        className={cn(styles.allProductsTitle, {
          [styles.dark]: theme === "dark",
        })}
      >
        All Products
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
        className={cn(styles.allProductsWrapper, {
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
