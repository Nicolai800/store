import React, { useEffect, useContext } from "react";
import { CardItem } from "../../components/card-item";
import styles from "./index.module.scss";
import { setItems } from "../../store/shop-slice";
import { useDispatch, useSelector } from "react-redux";
import { BASE_URL } from "../../constants";
import { getDiscountPercent } from "../../utils/getDiscountPercent";
import { themeContext } from "../../context/theme";
import cn from "classnames";

export const AllProducts = () => {
  const dispatch = useDispatch();
  const saleItems = useSelector((state) => state.shop.items);
  const { theme } = useContext(themeContext);


  return (
    <>
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
          className={styles.priceInputs}
        />{" "}
        <input type="number" placeholder="to" className={styles.priceInputs} />
        <span className={styles.texts}>Discounted items </span>{" "}
        <input type="checkbox" className={styles.checkboxDiscounted} />
        <span className={styles.texts}>Sorted</span>
        <select id={styles.sortedForm}>
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
        {saleItems.map(({ price, discont_price, title, image, id }) => (
          <CardItem
            key={id}
            price={price}
            discont={discont_price === null ? price : discont_price}
            discontPercent={getDiscountPercent(price, discont_price)}
            title={title}
            image={image}
            id = {id}
          />
        ))}
      </div>
    </>
  );
};
