import React from "react";
import styles from "./index.module.scss";
import headerBackImg from "../../assets/headerBackImgjpg.jpg";

export const Header = () => {
  return (
    <div className={styles.headerWrapper}>
      <div
        className={styles.backgroundImage}
        style={{ backgroundImage: `url(${headerBackImg})` }}
      ></div>
      <div className={styles.headerText}>
        <div>Amazing Discounts</div>
        <div>on Garden Products!</div>
        <button className={styles.buttonHeader}>Check out</button>
      </div>
    </div>
  );
};
