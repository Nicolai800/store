import React, { useContext, useState,useMemo } from "react";
import { CardItem } from "../../components/card-item";
import styles from "./index.module.scss";
import { useSelector } from "react-redux";
import { getDiscountPercent } from "../../utils/getDiscountPercent";
import { themeContext } from "../../context/theme";
import { Link } from "react-router-dom";
import { getLikedCount } from "../../store/selectors";
import cn from "classnames";
import {sortItems} from '../../utils/sortItems';
import { filterItems } from "../../utils/filterItems";

export const LikedProducts = () => {
  const allItems = useSelector((state) => state.shop.items);
  const { theme } = useContext(themeContext);
  const likeditems = useSelector((state) => state.shop.likesData);
  const filteredLikesArr = allItems.filter((item) => likeditems[item.id]);
  const [isChecked, setIsChecked] = useState(false);
  const [sortOrder, setSortOrder] = useState("by default");
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(0);
  const likedCounter = useSelector(getLikedCount);

  const minValueChange = (event) => {
    setMinValue(event.target.value);
  };
  const maxValueChange = (event) => {
    setMaxValue(event.target.value);
  };

  const sortChange = (event) => {
    setSortOrder(event.target.value);
  };

  const sortedItems = useMemo(() => sortItems(sortOrder, filteredLikesArr), [sortOrder, filteredLikesArr]);

  const checkboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const filteredAndSortedItems = useMemo(
    () => filterItems(minValue, maxValue, sortedItems),
    [minValue, maxValue, sortedItems]
  );


  if (likedCounter === 0) {
    return (
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
        <div>Liked products</div>
      </div>
        <h2
          className={cn(styles.allProductsTitle, {
            [styles.dark]: theme === "dark",
          })}
        >
          Liked Products
        </h2>
        <div
          className={cn(styles.emptyLikes, {
            [styles.dark]: theme === "dark",
          })}
        >
          <h2>Looks like you haven't chosen anything yet.</h2>
          <Link to="/">
            <button>Continue Shopping</button>
          </Link>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div
          className={cn(styles.breadCrumbs, {
            [styles.dark]: theme === "dark",
          })}
        >
          <Link to={"/"}>
            <div>Main Page</div>
          </Link>
          {/* <hr/> */}
          <div>Liked Products</div>
        </div>
        <h2
          className={cn(styles.allProductsTitle, {
            [styles.dark]: theme === "dark",
          })}
        >
          Liked Products
        </h2>
        <div
          className={cn(styles.allProductInputsWrapper, {
            [styles.dark]: theme === "dark",
          })}
        >
          {" "}
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
            <span className={styles.texts}>Discounted items </span>{" "}
            <input
              type="checkbox"
              checked={isChecked}
              onChange={checkboxChange}
              className={styles.checkboxDiscounted}
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
  }
};
