import React, { useState, useContext } from "react";
import styles from "./index.module.scss";
import { NavHeartIcon, NavCartIcon, LogoIcon } from "../../assets/icons";
import { IconToggle } from "../../components/icon-toggle";
import { IconCounter } from "../../components/icon-counter";
import { NavLink, Link } from "react-router-dom";
import { themeContext } from "../../context/theme";
import { Hamburger } from "../../components/hambergerMenu/hamburger";
import cn from "classnames";
import { useSelector } from "react-redux";
import { getLikedCount } from "../../store/selectors";
import { getCardCount } from "../../store/selectors";
import { ShoppingCart } from "../shopping-cart";
import { Modal } from "../../components/modal/modal";

export const Navigation = () => {
  const [isToggleOn, setIsToggleOn] = useState(false);
  const { theme, switchTheme } = useContext(themeContext);
  const [isHamburgerActive, setIsHamburgerActive] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const cardCounter = useSelector((state) => state.cart.counter);
  const likesCounter = useSelector(getLikedCount);
  const cardsCounter = useSelector(getCardCount);
  //console.log(isModalOpen);

  const onSwitchToggle = () => {
    setIsToggleOn((prev) => !prev);
    switchTheme();
  };
  const onToggleHamburgersClass = () => {
    setIsHamburgerActive((prev) => !prev);
  };
  const onToggleModal = () => {
    setIsModalOpen((prev) => !prev);
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
          <Link to ="liked-products"><NavHeartIcon
            className={cn(styles.heartIcon, {
              [styles.dark]: theme === "dark",
            })}
          /></Link>
          
        </IconCounter>
        <IconCounter count={cardsCounter}>
          <Link to="shopping-cart">
            <NavCartIcon
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
          onToggleModal = {onToggleModal}
        />
        {isModalOpen && <Modal onClose={onToggleModal} />}
      </div>
    </div>
  );
};
