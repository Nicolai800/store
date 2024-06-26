import React, { useContext, useState, useEffect, useMemo } from "react";
import { CardItem } from "../../components/card-item";
import styles from "./index.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { getDiscountPercent } from "../../utils/getDiscountPercent";
import { themeContext } from "../../context/theme";
import { Link } from "react-router-dom";
import cn from "classnames";
import { getIsLoading, getError } from "../../store/selectors";
import { fetchAllItems } from "../../store/async-actions";
import { sortItems } from "../../utils/sortItems";
import { filterItems } from "../../utils/filterItems";
import { BreadCrumbs } from "../../components/bread-сrumbs";

export const AllSales = () => {
  const allItems = useSelector((state) => state.shop.items);
  const { theme } = useContext(themeContext);
  const [sortOrder, setSortOrder] = useState("by default");
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(0);
  const dispatch = useDispatch();
  
  useEffect(() => {
    if (!allItems.length) {
      dispatch(fetchAllItems());
    }
  }, [dispatch]);
  const salesItems = allItems.filter(
    ({ discont_price }) => discont_price !== null
  );

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
    () => sortItems(sortOrder, salesItems),
    [sortOrder, salesItems]
  );

  const filteredAndSortedItems = useMemo(
    () => filterItems(minValue, maxValue, sortedItems),
    [minValue, maxValue, sortedItems]
  );

  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  if (error) {
    return <div>ERROR</div>;
  }

  return isLoading ? (
    <div
      className={cn(styles.loading, {
        [styles.dark]: theme === "dark",
      })}
    >
      Loading... Please wait...
    </div>
  ) : (
    <>
      <BreadCrumbs/>
      <h2
        className={cn(styles.allSalesTitle, {
          [styles.dark]: theme === "dark",
        })}
      >
        Discounted items
      </h2>
      <div
        className={cn(styles.allSalesInputsWrapper, {
          [styles.dark]: theme === "dark",
        })}
      >
        <div>
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
          {" "}
          <span className={styles.texts}>Sorted</span>
          <select id={styles.sortedForm} onChange={sortChange}>
            <option value="by default">by default</option>
            <option value="newest">newest</option>
            <option value="price: high-low">price: high-low</option>
            <option value="price: low-high">price: low-high</option>
          </select>
        </div>
      </div>
      <div
        className={cn(styles.allSalesWrapper, {
          [styles.dark]: theme === "dark",
        })}
      >
        {filteredAndSortedItems.map(
          ({ price, discont_price, title, image, id, categoryId }) => (
            <CardItem
              key={id}
              price={price}
              discont={discont_price}
              discontPercent={getDiscountPercent(price, discont_price)}
              title={title}
              image={image}
              id={id}
              categoryId={categoryId}
            />
          )
        )}
      </div>
    </>
  );
};
