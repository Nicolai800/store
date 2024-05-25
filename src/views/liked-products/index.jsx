import React, { useContext } from "react";
import { CardItem } from "../../components/card-item";
import styles from "./index.module.scss";
import { useSelector } from "react-redux";
import { getDiscountPercent } from "../../utils/getDiscountPercent";
import { themeContext } from "../../context/theme";
import cn from "classnames";

export const LikedProducts = () => {
  const allItems = useSelector((state) => state.shop.items);
  const { theme } = useContext(themeContext);
  const likeditems = useSelector((state) => state.shop.likesData);

  //console.log(likeditems);
  //console.log(allItems);
  const filteredArr = allItems.filter( item => likeditems[item.id])
  //console.log(filteredArr);

  return (
    <>
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
        {allItems.filter( item => likeditems[item.id]).map(({ price, discont_price, title, image, id }) => (
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