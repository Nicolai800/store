import React, {useContext} from "react";
import styles from "./index.module.scss";
import { InstagrammIcon, WhatsappIcon } from "../../assets/icons.jsx";
import { Map } from "../../components/map/map.jsx";
import { themeContext } from "../../context/theme.jsx";
import cn from 'classnames';

export const Footer = () => {
  const {theme, switchTheme} = useContext(themeContext);
  return (
    <footer className={cn(styles.footerWrapper, {
      [styles.dark]: theme === 'dark'
    })}>
      <h2 className={cn(styles.footerHeader, {
      [styles.dark]: theme === 'dark'
    })}>Contact</h2>
      <div className={styles.contactWrapper}>
        <div className={styles.contactsDivBackground}>
          <div className={styles.contactsFontHeader}>Phone</div>
          <p className={styles.contactsFont}>+49 999 999 99 99</p>
        </div>

        <div className={styles.contactsDivBackground}>
          <div className={styles.contactsFontHeader}>Social</div>
          <div className={styles.instWhatWrapper}>
            <InstagrammIcon className={styles.instagramm} />
            <WhatsappIcon className={styles.whatsapp} />
          </div>
        </div>
        <div className={styles.contactsDivBackground}>
          <div className={styles.contactsFontHeader}>Adress</div>
          <p className={styles.contactsFont}>
            Linkstraße 2, 8 OG, 10 785, Berlin, Deutschland
          </p>
        </div>
        <div className={styles.contactsDivBackground}>
          <div className={styles.contactsFontHeader}>Working Hours</div>
          <p className={styles.contactsFont}>24 hours a day</p>
        </div>
      </div>
      <Map />
    </footer>
  );
};
