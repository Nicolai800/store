import React, {useContext} from "react";
import {HeartIcon, CartIcon} from "../../assets/icons"
import styles from "./index.module.scss";
import { BASE_URL } from "../../constants";
import { themeContext } from "../../context/theme";
import cn from "classnames";

export const CardItem = ({ price, description, image, discont, discontPercent }) => {
  const { theme, switchTheme } = useContext(themeContext);
  return (
    <div className={cn(styles.wrapper, {
      [styles.dark]: theme === "dark"
    })}>
      <div className={styles.header}>
        <div className={cn(styles.discount, {
        [styles.none]: discontPercent === 0
      })}>{"-"+discontPercent}%</div>
        <img src={BASE_URL + image} alt="card" className={styles.cardImage} />
        <HeartIcon className={styles.heart}/>
        <CartIcon className={styles.cart}/>
      </div>
      <div className={cn(styles.info, {
        [styles.dark]: theme === "dark"
      })}>
        <div className={cn(styles.description, {
        [styles.dark]: theme === "dark"
      })}>{description}</div>
        <div className={styles.prices}>
          <span className={cn(styles.newPrice, {
        [styles.dark]: theme === "dark"
      })}>{"$"+discont}</span>
          <span className={cn(styles.oldPrice, {
        [styles.none]: discontPercent === 0
      })}>{"$"+price}</span>
        </div>
      </div>
    </div>
  );
};

