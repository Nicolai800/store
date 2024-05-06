import React from "react";
import styles from "./index.module.scss";
import { InstagrammIcon, WhatsappIcon } from "../../assets/icons.jsx";
import { Map } from "../../components/map/map.jsx";

export const Footer = () => {
  return (
    <footer className={styles.footerWrapper}>
      <h2>Contact</h2>
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
