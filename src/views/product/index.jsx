import React from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../constants";
import { useSelector } from "react-redux";
import styles from "./index.module.scss";
import cn from "classnames";
import { getDiscountPercent } from "../../utils/getDiscountPercent";

export const Product = () => {
  const { itemId } = useParams();
  const data = useSelector((state) => state.shop.items);
  let discoveredItem = data.find(({ id }) => +id === +itemId);
  console.log(discoveredItem, "discovered");
  const { title, price, discont_price, image, description } = discoveredItem;

  // ### /products/${itemId}     - ссылка на первый продукт

  return (
    <div className={styles.wrapper}>
      <div className={styles.product_card}>
        <div className={styles.left_card}>
          <div className={styles.product_image}>
            <img src={BASE_URL + image} alt="Secateurs" />
          </div>
        </div>
        <div className={styles.right_card}>
          <div className={styles.product_details}>
            <h2 className={styles.product_title}>{title}</h2>
            <div className={styles.price}>
              {discont_price === null ? "$"+price : "$"+discont_price}
              <del>{"$"+price}</del>
              <span className={styles.discount}>
                {getDiscountPercent(price, discont_price)}
              </span>
            </div>
            <div className={styles.quantity}>
              <button /*onClick={deleteCounter}*/>-</button>
              <input type="number" /*value={productCounter}*/ />
              <button /*onClick={addCounter}*/>+</button>
              <button className={styles.add_to_cart}>Add to cart</button>
            </div>
          </div>
          <div className={styles.description}>
            <p>Description</p>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
