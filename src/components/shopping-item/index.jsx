import React, { useContext } from "react";
import { HeartIcon, CartIcon } from "../../assets/icons";
import styles from "./index.module.scss";
import { BASE_URL } from "../../constants";
import { themeContext } from "../../context/theme";
import cn from "classnames";
import { Link } from "react-router-dom";
import { toggleCartItem } from "../../store/cart-slice";
import { useDispatch, useSelector } from "react-redux";

export const ShoppingItem = ({
  price,
  title,
  image,
  discont,
  discontPercent,
  id,
}) => {
  const { theme } = useContext(themeContext);
  const dispatch = useDispatch();
  const selectedData = useSelector((state) => state.cart.selectedData);
  const allItems = useSelector((state) => state.shop.item);
  return (
    <div className={styles.shopingItemWrapper}>
      <img src={BASE_URL + image} alt="card" className={styles.imgWrapper} />
      <div className={styles.itemInfo}>
        <button className={styles.xButton}>x</button>
        <div className={styles.itemTitle}>
          <div>
            {title}
          </div>
        </div>
        <div className={styles.quantity}>
          <div className={styles.buttonsInput}>
            <button /*onClick={deleteCounter}*/>-</button>
            <input type="number" /*value={productCounter}*/ />
            <button /*onClick={addCounter}*/>+</button>
             <div className={styles.prices}>
            <span
              className={cn(styles.newPrice, {
                [styles.dark]: theme === "dark",
              })}
            >
              {"$" + discont}
            </span>
            <span
              className={cn(styles.oldPrice, {
                [styles.none]: discontPercent === 0,
              })}
            >
              {"$" + price}
            </span>
          </div>
          </div>
         
        </div>
      </div>
    </div>
  );
};
