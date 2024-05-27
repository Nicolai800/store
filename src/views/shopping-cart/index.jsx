import React, { useEffect, useContext } from "react";
import { CardItem } from "../../components/card-item";
import styles from "./index.module.scss";
import { setItems } from "./index.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { BASE_URL } from "../../constants";
import { getDiscountPercent } from "../../utils/getDiscountPercent";
import { themeContext } from "../../context/theme";
import { ShoppingItem } from "../../components/shopping-item";
import cn from "classnames";

export const ShoppingCart = () => {
  const allItems = useSelector((state) => state.shop.items);
  const { theme } = useContext(themeContext);
  const shopingCartItems = useSelector((state) => state.cart.selectedData);
  const cardCounter = useSelector((state) => state.cart.counter);
  const filteredItems = allItems.filter((item) => shopingCartItems[item.id]);
  const totalSum = filteredItems.reduce((sum, item) => {
    return (
      sum + (item.discont_price === null ? item.price : item.discont_price)
    );
  }, 0);
  return (
    <>
      <h2
        className={cn(styles.shopingCartTitle, {
          [styles.dark]: theme === "dark",
        })}
      >
        Shoping Cart
      </h2>
      <div className={styles.shoppingCartWrapper}>
        <div className={styles.shoppingList}>
          {filteredItems.map(({ price, discont_price, title, image, id }) => (
            <ShoppingItem
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
        <div className={styles.orderForm}>
          <h3>Order Details</h3>
          <div className={styles.orderPrais}>
            <div>{cardCounter} items</div>
            <div>
              Total<span>{totalSum.toFixed(2)}$</span>
            </div>
            <div className={styles.orderInputs}>
              <input type="text" />
              <input type="phone" />
              <input type="text" />
              <button>Order</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
