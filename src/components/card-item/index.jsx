import React from "react";
import {HeartIcon, CartIcon} from "../../assets/icons"
import styles from "./index.module.scss";
import { BASE_URL } from "../../constants";

export const CardItem = ({ price, description, image, discont, discontPercent }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.discount}>{"-"+discontPercent}%</div>
        <img src={BASE_URL + image} alt="card" className={styles.cardImage} />
        <HeartIcon className={styles.heart}/>
        <CartIcon className={styles.cart}/>
      </div>
      <div className={styles.info}>
        <div className={styles.description}>{description}</div>
        <div className={styles.prices}>
          <span className={styles.newPrice}>{"$"+discont}</span>
          <span className={styles.oldPrice}>{"$"+price}</span>
        </div>
      </div>
    </div>
  );
};

