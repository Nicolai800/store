import React, { useState, useContext } from "react";
import { CardItem } from "../../components/card-item";
import styles from "./index.module.scss";
import { setItems } from "../../store/shop-slice";
import { useDispatch, useSelector } from "react-redux";
import { BASE_URL } from "../../constants";
import { Link } from "react-router-dom";
import { getDiscountPercent } from "../../utils/getDiscountPercent";
import { themeContext } from "../../context/theme";
import cn from "classnames";

export const AllProducts = () => {
  const dispatch = useDispatch();
  const allItems = useSelector((state) => state.shop.items);
  const { theme } = useContext(themeContext);
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

  const sortedItems = [...allItems].sort((a, b) => {
    if (sortOrder === "price: high-low") {
      return b.price - a.price;
    } else if (sortOrder === "price: low-high") {
      return a.price - b.price;
    } else if (sortOrder === "newest") {
      return new Date(b.updatedAt) - new Date(a.updatedAt);
    } else {
      return a.id - b.id;
    }
  });

  const checkboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const filteredAndSortedItems =
    !minValue && !maxValue
      ? sortedItems
      : sortedItems
          .filter((item) => item.price >= minValue && item.price <= maxValue)
          .sort((a, b) => a.price - b.price);

  return (
    <>
      <div className={cn(styles.breadCrumbs, {
            [styles.dark]: theme === "dark",
          })}>
        <Link to={"/"}>
          <div>Main Page</div>
        </Link>
         <hr/>
        <div>All product</div>
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
        <span className={styles.texts}>Discounted items </span>{" "}
        <input
          type="checkbox"
          checked={isChecked}
          onChange={checkboxChange}
          className={styles.checkboxDiscounted}
        />
        <span className={styles.texts}>Sorted</span>
        <select id={styles.sortedForm} onChange={sortChange}>
          <option value="by default">by default</option>
          <option value="newest">newest</option>
          <option value="price: high-low">price: high-low</option>
          <option value="price: low-high">price: low-high</option>
        </select>
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
        ).map(({ price, discont_price, title, image, id }) => (
          <CardItem
            key={id}
            price={price}
            discont={discont_price === null ? price : discont_price}
            discontPercent={getDiscountPercent(price, discont_price)}
            title={title}
            image={image}
            id={id}
          />
        ))}
      </div>
    </>
  );
};
