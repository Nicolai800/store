import { createPortal } from "react-dom";
import React from "react";
import styles from "./index.module.scss";

export const OrderModal = () => {
  return createPortal(
    <div className={styles.modalBackground}>
      <div className={styles.modalWrapper}>
        <div className={styles.modalText}>
          <h3>Congratulations!</h3>
          <p>
            Your order has been successfully placed on the website. A manager
            will contact you shortly to confirm your order.
          </p>
        </div>
        <span>X</span>
      </div>
    </div>,
    document.body
  );
};
