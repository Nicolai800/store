import React, { useState, useContext } from "react";
import { CardItem } from "../../components/card-item";
import styles from "./index.module.scss";
import { setItems } from "./index.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { BASE_URL } from "../../constants";
import { getDiscountPercent } from "../../utils/getDiscountPercent";
import { themeContext } from "../../context/theme";
import { getCardCount } from "../../store/selectors";
import { ShoppingItem } from "../../components/shopping-item";
import { OrderModal } from "../../components/order-modal";
import { Link } from "react-router-dom";
import cn from "classnames";

export const ShoppingCart = () => {
  const allItems = useSelector((state) => state.shop.items);
  const { theme } = useContext(themeContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const shopingCartItems = useSelector((state) => state.cart.cardsData);
  const cardCounter = useSelector(getCardCount);
  const filteredItems = allItems.filter(
    (item) => shopingCartItems[item.id] > 0
  );
  const totalSum = filteredItems.reduce((sum, item) => {
    return (
      sum +
      shopingCartItems[item.id] *
        (item.discont_price === null ? item.price : item.discont_price)
    );
  }, 0);

  //console.log(shopingCartItems);
  const onToggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  const [inputName, setInputName] = useState("");
  const [inputPhone, setInputPhone] = useState("");
  const [inputEmail, setInputEmail] = useState("");

  const inputNameChange = (e) => {
    setInputName(e.target.value);
  };

  const inputPhoneChange = (e) => {
    setInputPhone(e.target.value);
  };
  const inputEmailChange = (e) => {
    setInputEmail(e.target.value);
  };
  //console.log(inputName,inputPhone,inputEmail);

  if (cardCounter === 0) {
    return (
      <>
        <div
          className={cn(styles.shopingCartTitle, {
            [styles.dark]: theme === "dark",
          })}
        >
          <h2>Shopping Cart</h2>{" "}
          <div className={styles.lineWrapper}>
            <div className={styles.line}></div>
            <Link to="/" className={styles.titleLink}>
              Back to the store
            </Link>
          </div>
        </div>
        <div
          className={cn(styles.emptyBasket, {
            [styles.dark]: theme === "dark",
          })}
        >
          <h2>Looks like you have no items in your basket currently.</h2>
          <Link to="/">
            <button>Continue Shopping</button>
          </Link>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div
          className={cn(styles.shopingCartTitle, {
            [styles.dark]: theme === "dark",
          })}
        >
          <h2>Shopping Cart</h2>{" "}
          <div className={styles.lineWrapper}>
            <div className={styles.line}></div>
            <Link to="/" className={styles.titleLink}>
              Back to the store
            </Link>
          </div>
        </div>
        <div
          className={cn(styles.emptyBasket, {
            [styles.dark]: theme === "dark",
          })}
        >
          <h2>Looks like you have no items in your basket currently.</h2>
          <Link to="/">
            <button>Continue Shopping</button>
          </Link>
        </div>
        <div
          className={cn(styles.shoppingCartWrapper, {
            [styles.dark]: theme === "dark",
          })}
        >
          <div className={styles.shoppingList}>
            {filteredItems.map(({ price, discont_price, title, image, id }) => (
              <ShoppingItem
                key={id}
                price={price}
                discont={discont_price === null ? price : discont_price}
                discontPercent={getDiscountPercent(price, discont_price)}
                title={title}
                image={image}
                id={id}
              />
            ))}
          </div>
          <div
            className={cn(styles.orderForm, {
              [styles.dark]: theme === "dark",
            })}
          >
            <h3>Order Details</h3>
            <div className={styles.orderPrais}>
              <div>{cardCounter} items</div>
              <div className={styles.total}>
                <p>Total</p>
                <span
                  className={cn(styles.totalSum, {
                    [styles.dark]: theme === "dark",
                  })}
                >
                  {totalSum.toFixed(2)}$
                </span>
              </div>
              <div
                className={cn(styles.orderInputs, {
                  [styles.dark]: theme === "dark",
                })}
              >
                <input
                  type="text"
                  placeholder="Name"
                  className={styles.shoppingCartInputs}
                  onChange={inputNameChange}
                ></input>
                <input
                  type="tel"
                  pattern="\(\d\d\d\) ?\d\d\d-\d\d-\d\d"
                  placeholder="Phone number"
                  className={styles.shoppingCartInputs}
                  onChange={inputPhoneChange}
                ></input>
                <input
                  type="email"
                  placeholder="Email"
                  className={styles.shoppingCartInputs}
                  onChange={inputEmailChange}
                ></input>
                <button onClick={onToggleModal}>Order</button>
              </div>
            </div>
          </div>
        </div>
        {isModalOpen && <OrderModal onToggleModal={onToggleModal} />}
      </>
    );
  }
};
