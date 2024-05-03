import React from "react";
import { Link } from "react-router-dom";
import styles from "./index.module.scss";
import notFoundImg from "../../assets/notFoundImg.png";
import {NumberFourIcon}from "../../assets/icons"

export const NotFound = () => {
  return (
    <div className={styles.notFoundWrapper}>
      <div>
        <NumberFourIcon/>
        <img
          src={notFoundImg}
          className={styles.notFoundImg}
          alt="notFoundImg"
        />
        <NumberFourIcon/>
      </div>
      <h2>Page Not Found</h2>
      <div>
        We’re sorry, the page you requested could not be found. Please go back
        to the homepage.
      </div>
      <Link to="/">Go home!</Link>
    </div>
  );
};
