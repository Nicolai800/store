import { createPortal } from "react-dom";
import React from "react";
import { BASE_URL } from "../../constants";
import styles from "./index.module.scss";

export const ProductImgModal = ({ onToggleImgModal, image }) => {
  return createPortal(
    <div className={styles.modalBackground} onClick={onToggleImgModal}>
      <div className={styles.modalWrapper}> <img src={BASE_URL + image} alt="Product img"/></div>
    </div>,
    document.body
  );
};
