import React, { useContext, memo } from "react";
import { HeartIcon, CartIcon } from "../../assets/icons";
import styles from "./index.module.scss";
import { BASE_URL } from "../../constants";
import { themeContext } from "../../context/theme";
import cn from "classnames";
import { Link } from "react-router-dom";
import { toggleCartItem } from "../../store/cart-slice";
import { deleteCardItem,addToCart, deleteFromCart} from "../../store/cart-slice";
import { useDispatch, useSelector } from "react-redux";

export const ShoppingItem = memo(({
  price,
  title,
  image,
  discont,
  discontPercent,
  id,
}) => {
  const { theme } = useContext(themeContext);
  const dispatch = useDispatch();
  const selectedData = useSelector((state) => state.cart.cardsData);
  const allItems = useSelector((state) => state.shop.item);
  
  // const [counter, setCounter] = useState(1);
  // const inputChange = (event) => {
  //   setCounter(event.target.value);
  // };
  const addCounter = (item) => {
    dispatch(addToCart(item));
  };
  const deleteCounter = (item) => {
    dispatch(deleteFromCart(item));
  
  };

  const deleteTotal= (item) => {
    dispatch(deleteCardItem(item))
  }

  //console.log(selectedData);

  return (
    <div className={cn(styles.shopingItemWrapper, {
      [styles.dark]: theme === "dark",
    })}>
      <img src={BASE_URL + image} alt="card" className={styles.imgWrapper} />
      <div className={styles.itemInfo}>
        <button className={cn(styles.xButton, {
      [styles.dark]: theme === "dark",
    })} onClick={()=>deleteTotal(id)}>x</button>
        <div className={cn(styles.itemTitle, {
      [styles.dark]: theme === "dark",
    })}>
          <span>{title}</span>
        </div>
        <div className={styles.quantity}>
          <div className={cn(styles.buttonsSpan, {
      [styles.dark]: theme === "dark",
    })}>
            <button onClick={()=>deleteCounter(id)}>-</button>
            <span>{selectedData[id]}</span>
            <button onClick={()=>addCounter(id)}>+</button>
          </div>
          <div className={styles.prices}>
            <span
              className={cn(styles.newPrice, {
                [styles.dark]: theme === "dark",
              })}
            >
              {"$" + (discont * selectedData[id]).toFixed(2)}
            </span>
            <span
              className={cn(styles.oldPrice, {
                [styles.none]: discontPercent === 0,
              })}
            >
              {"$" + (price * selectedData[id]).toFixed(2)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
});
