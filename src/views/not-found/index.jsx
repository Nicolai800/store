import React, {useContext} from "react";
import { Link } from "react-router-dom";
import styles from "./index.module.scss";
import notFoundImg from "../../assets/notFoundImg.png";
import { NumberFourIcon } from "../../assets/icons";
import { themeContext } from "../../context/theme";
import cn from "classnames";
import { BASE_URL } from "../../constants";

export const NotFound = () => {
  const { theme } = useContext(themeContext);
  return (
    <div className={cn(styles.notFoundWrapper, {
      [styles.dark]: theme === "dark",
    })}>
      <div className={styles.notFound}>
        <div>
          <NumberFourIcon />
          <img
            src={notFoundImg}
            className={styles.notFoundImg}
            alt="notFoundImg"
          />
          <NumberFourIcon />
        </div>
        <h2 className={styles.pageNotFoundText}>Page Not Found</h2>
        <div className={styles.notFoundDescription}>
          We’re sorry, the page you requested could not be found. Please go back
          to the homepage.
        </div>
        <Link to="/"><button className={styles.btn}>Go home!</button></Link>
      </div>
    </div>
  );
};
