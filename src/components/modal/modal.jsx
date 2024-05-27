import { createPortal } from "react-dom";
import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./index.module.scss";

export const Modal = () => {
  return createPortal(
    <div className={styles.modal}>
      <NavLink to="/" className={styles.links}>
        Main Page
      </NavLink>
      <NavLink to="/categories" className={styles.links}>
        Categories
      </NavLink>
      <NavLink to="/all-products" className={styles.links}>
        All Products
      </NavLink>
      <NavLink to="all-sales" className={styles.links}>
        All Sales
      </NavLink>
    </div>,

    document.body
  );
};
