import { createPortal } from "react-dom";
import React from "react";
import styles from "./index.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { getCardsData } from "../../store/selectors";
import { clearCardsData } from "../../store/cart-slice";

export const OrderModal = ({onToggleModal} ) => {
  const orderData = useSelector(getCardsData)
  const dispatch = useDispatch();

  const closeModalAndCleraCardsData = () =>{
    dispatch(clearCardsData());
    onToggleModal();
  }

  return createPortal(
    <div className={styles.modalBackground}>
      <div className={styles.modalWrapper}>
        <div className={styles.modalText}>
          <h3>Congratulations!</h3>
          <p>Your order has been successfully placed on the website.</p>{" "}
          <p>A manager will contact you shortly to confirm your order.</p>
        </div>
        <span onClick= {closeModalAndCleraCardsData}>X</span>
      </div>
    </div>,
    document.body
  );
};
