import React, { useEffect } from "react";
import { CardItem } from "../../components/card-item";
import styles from "./index.module.scss";
import { setItems } from "../../store/shop-slice";
import { useDispatch, useSelector } from "react-redux";
import { BASE_URL } from "../../constants";
import { getDiscountPercent } from "../../utils/getDiscountPercent";

export const AllSales = () => {
  const dispatch = useDispatch();
  const saleItems = useSelector((state) => state.shop.items);

  useEffect(() => {
    fetch(`${BASE_URL}/products/all`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        dispatch(setItems(data));
      });
  }, []);

  return (
    <div className={styles.allSalesWrapper}>
      <h1>All Sales</h1>
      {saleItems
        .filter(({ discont_price }) => discont_price !== null)
        .map(({ price, discont_price, description, image, id }) => (
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
  );
};
