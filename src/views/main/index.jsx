import React, { useEffect, useContext } from "react";
import { Header } from "../header/header";
import { Categories } from "../categories";
import { DiscountForm } from "../discount-form";
import { CardItem } from "../../components/card-item";
import styles from "./index.module.scss";
import { getDiscountPercent } from "../../utils/getDiscountPercent";
import { themeContext } from "../../context/theme";
import cn from "classnames";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllItems, fetchAllCategories } from "../../store/async-actions"; 
import {
  getDiscountItems,
  getIsLoading,
  getError,
} from "../../store/selectors";

export const Main = () => {
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllItems());
    dispatch(fetchAllCategories());
  }, [dispatch]);

  const { theme } = useContext(themeContext);

  const saleItems = useSelector(getDiscountItems);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  if (error) {
    return <div>ERROR</div>;
  }

  return isLoading ? (
    <div className={cn(styles.loading, {
      [styles.dark]: theme === "dark",
    })}>Loading... Please wait...</div>
  ) : (
    <>
      <Header />
      <Categories elementsCount={4} crumbs={false} />
      <DiscountForm />
      <div
        className={cn(styles.saleWrapper, {
          [styles.dark]: theme === "dark",
        })}
      >
       <div
        className={cn(styles.saleText, {
          [styles.dark]: theme === "dark",
        })}
      >
        <h2>Sale</h2>{" "}
        <div
          className={styles.lineWrapper}
        >
          <hr />
          <Link to="/all-sales" className={styles.titleLink}>
            All sales
          </Link>
        </div>
      </div>
        <div
          className={cn(styles.sales, {
            [styles.dark]: theme === "dark",
          })}
        >
          {saleItems.map(({ price, discont_price, title, image, id, categoryId }) => (
            <CardItem
              key={id}
              price={price}
              discont={discont_price}
              discontPercent={getDiscountPercent(price, discont_price)}
              title={title}
              image={image}
              id={id}
              categoryId={categoryId}
            />
          ))}
        </div>
      </div>
    </>
  );
};
