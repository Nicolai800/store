import React, { useState, useContext } from "react";
import styles from "./index.module.scss";
import { HeartIcon, CartIcon, LogoIcon } from "../../assets/icons";
import { IconToggle } from "../../components/icon-toggle";
import { IconCounter } from "../../components/icon-counter";
import { NavLink, Link } from "react-router-dom";
import { themeContext } from "../../context/theme";
import { Hamburger } from "../../components/hambergerMenu/hamburger";
import cn from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { getLikedCount } from "../../store/selectors";
import { ShoppingCart } from "../shopping-cart";

export const Navigation = () => {
  const [isToggleOn, setIsToggleOn] = useState(false);
  const { theme, switchTheme } = useContext(themeContext);
  const [isHamburgerActive, setIsHamburgerActive] = useState(false);
  const cardCounter = useSelector((state) => state.cart.counter);
  const likesCounter = useSelector(getLikedCount);

  const onSwitchToggle = () => {
    setIsToggleOn((prev) => !prev);
    switchTheme();
  };
  const onToggleHamburgersClass = () => {
    setIsHamburgerActive((prev) => !prev);
  };

  const getClassName = ({ isActive }) => (isActive ? styles.active : "");

  return (
    <div
      className={cn(styles.header, {
        [styles.dark]: theme === "dark",
      })}
    >
      <div className={styles.iconWrapper}>
        <LogoIcon className={styles.logo} />
        <IconToggle checked={isToggleOn} onToggle={onSwitchToggle} />
      </div>

      <nav className={styles.navbar}>
        <NavLink to="/" className={getClassName}>
          Main Page
        </NavLink>
        <NavLink to="/categories" className={getClassName}>
          Categories
        </NavLink>
        <NavLink to="/all-products" className={getClassName}>
          All Products
        </NavLink>
        <NavLink to="all-sales" className={getClassName}>
          All Sales
        </NavLink>
      </nav>
      <div className={styles.heartCartWrapper}>
        <IconCounter count={likesCounter}>
          <HeartIcon
            className={cn(styles.heartIcon, {
              [styles.dark]: theme === "dark",
            })}
          />
        </IconCounter>
        <IconCounter count={cardCounter}>
          <Link to="shopping-cart">
            <CartIcon
              className={cn(styles.cartIcon, {
                [styles.dark]: theme === "dark",
              })}
            />
          </Link>
        </IconCounter>
        <Hamburger
          isToggleOn={isToggleOn}
          isHamburgerActive={isHamburgerActive}
          theme={theme}
          onToggleHamburgersClass={onToggleHamburgersClass}
        />
      </div>
    </div>
  );
};
