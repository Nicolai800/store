import React, { useEffect, useState, useContext } from "react";
import { Header } from "../header/header";
import { Categories } from "../categories";
import { DiscountForm } from "../discount-form";
import { BASE_URL } from "../../constants";
import { CardItem } from "../../components/card-item";
import styles from "./index.module.scss";
import { getDiscountPercent } from "../../utils/getDiscountPercent";
import { themeContext } from "../../context/theme";
import cn from "classnames";
import {setItems} from "../../store/shop-slice";
import { useDispatch, useSelector } from "react-redux";

export const Main = () => {
  const [saleItems, setSaleItems] = useState([]);
  const { theme, switchTheme } = useContext(themeContext);
  useEffect(() => {
    fetch(`${BASE_URL}/products/all`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setSaleItems(
          data
            .sort(
              (elem1, elem2) =>
                getDiscountPercent(elem2.price, elem2.discont_price) -
                getDiscountPercent(elem1.price, elem1.discont_price)
            )
            .filter(
              ({ discont_price }, index) => discont_price !== null && index < 4
            )
        );
      });
  }, []);

  return (
    <>
      <Header />
      <Categories elementsCount={4}/>
      <DiscountForm />
      <div className={cn(styles.saleWrapper, {
        [styles.dark]: theme === "dark",
      })}>
        <h2 className={cn(styles.saleText, {
        [styles.dark]: theme === "dark",
      })}>Sale</h2>
        <div className={cn(styles.sales, {
        [styles.dark]: theme === "dark",
      })}>
          {saleItems.map(({ price, discont_price, description, image, id }) => (
            <CardItem
              key={id}
              price={price}
              discont={discont_price}
              discontPercent={getDiscountPercent(price, discont_price)}
              description={description}
              image={image}
            />
          ))}
        </div>
      </div>
    </>
  );
};
