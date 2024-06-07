import React from "react";
import styles from "./index.module.scss";
import headerBackImg from "../../assets/headerBackImgjpg.jpg";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className={styles.headerWrapper}>
      <div
        className={styles.backgroundImage}
        style={{ backgroundImage: `url(${headerBackImg})` }}
      >
        <div className={styles.headerText}>
          <p>Amazing Discounts</p>
          <p>on Garden Products!</p>
          <Link to="/all-sales">
            <button className={styles.buttonHeader}>  Check out  </button>{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};
