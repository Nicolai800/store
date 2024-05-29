import React, {useContext} from "react";
import {HeartIcon, CartIcon} from "../../assets/icons"
import styles from "./index.module.scss";
import { BASE_URL } from "../../constants";
import { themeContext } from "../../context/theme";
import cn from "classnames";
import { Link } from "react-router-dom";
import { toggleCartItem } from "../../store/cart-slice";
import { useDispatch, useSelector } from "react-redux";
import { toggleToLikes } from "../../store/shop-slice";

export const CardItem = ({ price, title, image, discont, discontPercent, id }) => {
  const { theme } = useContext(themeContext);
  const dispatch = useDispatch();
  // const selectedData = useSelector((state)=> state.cart.selectedData);
  const selectedData = useSelector((state)=> state.cart.cardsData);
  const likesData = useSelector((state)=> state.shop.likesData);
  
  const likeToggle = (articul) => {
    dispatch(toggleToLikes(articul))
  }
  // const cartToggle = (articul, select) => {
  //   dispatch(toggleCartItem({articul, select}))
  // }
  const cartToggle = (articul) => {
    dispatch(toggleCartItem(articul))
  }
  return (
    <div className={cn(styles.wrapper, {
      [styles.dark]: theme === "dark"
    })}>
      <div className={styles.header}>
        <div className={cn(styles.discount, {
        [styles.none]: discontPercent === 0
      })}>{"-"+discontPercent}%</div>
        <img src={BASE_URL + image} alt="card" className={styles.cardImage} />
        <HeartIcon id ={id} select = {id}  likeToggle = {likeToggle} className={cn(styles.heart, {
              [styles.checked]: likesData[id]
            })}/>
        <CartIcon id={id} select = {id} cartToggle={cartToggle} className ={cn(styles.cart, {
              [styles.liked]: selectedData[id]
            })} />
      </div>
      <div className={cn(styles.info, {
        [styles.dark]: theme === "dark"
      })}>
        <div className={cn(styles.description, {
        [styles.dark]: theme === "dark"
      })}><Link  to={`/products/${id}`}className={cn(styles.link, {
        [styles.dark]: theme === "dark"
      })}>{title}</Link></div>
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

