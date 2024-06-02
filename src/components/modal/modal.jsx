import { createPortal } from "react-dom";
import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import styles from "./index.module.scss";
import cn from "classnames";
import { themeContext } from "../../context/theme";

export const Modal = () => {
  const { theme } = useContext(themeContext);
  return createPortal(
    <div className={styles.modalBackground}>
      <div
        className={cn(styles.modal, {
          [styles.dark]: theme === "dark",
        })}
      >
        <NavLink
          to="/"
          className={cn(styles.links, {
            [styles.dark]: theme === "dark",
          })}
        >
          Main Page
        </NavLink>
        <NavLink
          to="/categories"
          className={cn(styles.links, {
            [styles.dark]: theme === "dark",
          })}
        >
          Categories
        </NavLink>
        <NavLink
          to="/all-products"
          className={cn(styles.links, {
            [styles.dark]: theme === "dark",
          })}
        >
          All Products
        </NavLink>
        <NavLink
          to="all-sales"
          className={cn(styles.links, {
            [styles.dark]: theme === "dark",
          })}
        >
          All Sales
        </NavLink>
      </div>
    </div>,

    document.body
  );
};
