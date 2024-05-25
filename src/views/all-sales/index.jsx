import React, { useContext } from "react";
import { CardItem } from "../../components/card-item";
import styles from "./index.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { getDiscountPercent } from "../../utils/getDiscountPercent";
import { themeContext } from "../../context/theme";
import cn from "classnames";

export const AllSales = () => {
  const allItems = useSelector((state) => state.shop.items);
  const { theme } = useContext(themeContext);
  console.log(allItems);

  return (
    <>
      <h2
        className={cn(styles.allSalesTitle, {
          [styles.dark]: theme === "dark",
        })}
      >
        All Sales
      </h2>
      <div
        className={cn(styles.allSalesInputsWrapper, {
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
        <span className={styles.texts}>Sorted</span>
        <select id={styles.sortedForm}>
          <option value="by default">by default</option>
          <option value="newest">newest</option>
          <option value="price: high-low">price: high-low</option>
          <option value="price: low-high">price: low-high</option>
        </select>
      </div>
      <div
        className={cn(styles.allSalesWrapper, {
          [styles.dark]: theme === "dark",
        })}
      >
        {allItems
          .filter(({ discont_price }) => discont_price !== null)
          .map(({ price, discont_price, title, image, id }) => (
            <CardItem
              key={id}
              price={price}
              discont={discont_price}
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
