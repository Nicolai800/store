import React from "react";
import cn from "classnames";
import styles from "./index.module.scss"
import { createPortal } from "react-dom";
import { NavLink } from "react-router-dom";



export const Hamburger = ({isHamburgerActive,isToggleOn, theme, onToggleHamburgersClass}) => {
  
    return (

    <div className={  cn(styles.hamburger, {[styles.active]: isHamburgerActive})} onClick={onToggleHamburgersClass}>
    <span className = { cn(styles.strike_1, {[styles.dark]: isToggleOn})}>
    </span>
    
    <span className = { cn(styles.strike_2, {[styles.dark]: isToggleOn})}>
    </span>
    
    <span className = { cn(styles.strike_3, {[styles.dark]: isToggleOn})}>
    </span>
  </div>

    );
  };
  