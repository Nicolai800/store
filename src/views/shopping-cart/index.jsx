import React, { useState, useContext } from "react";
import styles from "./index.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { getDiscountPercent } from "../../utils/getDiscountPercent";
import { themeContext } from "../../context/theme";
import { getCardCount, getDiscountStatus } from "../../store/selectors";
import { ShoppingItem } from "../../components/shopping-item";
import { OrderModal } from "../../components/order-modal";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { sendOrderData } from "../../store/async-actions";
import cn from "classnames";

export const ShoppingCart = () => {
  const allItems = useSelector((state) => state.shop.items);
  const dispatch = useDispatch();
  const { theme } = useContext(themeContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const shopingCartItems = useSelector((state) => state.cart.cardsData);
  const cardCounter = useSelector(getCardCount);
  const discountStatus = useSelector(getDiscountStatus);

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

  const onToggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  const { register, handleSubmit, formState, getValues } = useForm();

  const onFormSubmit = (formData) => {
    dispatch(sendOrderData({...formData, order: shopingCartItems}));
    console.log(formData);
    onToggleModal();     //??????????????????????
  };

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
            <hr/>
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
          <hr/>
            <Link to="/" className={styles.titleLink}>
              Back to the store
            </Link>
          </div>
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
              <p>{cardCounter} items</p>
              <div className={styles.total}>
                <p>Total</p>
                <span
                  className={cn(styles.totalSum, {
                    [styles.dark]: theme === "dark",
                  })}
                >
                  {discountStatus
                    ? (totalSum - totalSum * 0.05).toFixed(2)
                    : totalSum.toFixed(2)}
                  $
                </span>
              </div>
              <form
                onSubmit={handleSubmit(onFormSubmit)}
                className={cn(styles.orderInputs, {
                  [styles.dark]: theme === "dark",
                })}
              >
                <input
                  type="text"
                  placeholder="Name"
                  className={styles.shoppingCartInputs}
                  {...register("userName", { required: true })}
                ></input>
                <input
                  type="number"
                  placeholder="Phone number"
                  className={styles.shoppingCartInputs}
                  {...register("userPhone", { required: true })}
                ></input>
                <input
                  type="email"
                  placeholder="Email"
                  className={styles.shoppingCartInputs}
                  {...register("userEmail", { required: true })}
                ></input>
                <button type="submit">Order</button>
              </form>
            </div>
          </div>
        </div>
        {isModalOpen && <OrderModal onToggleModal={onToggleModal} />}
      </>
    );
  }
};
