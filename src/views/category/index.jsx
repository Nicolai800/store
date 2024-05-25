import React, { useEffect, useState, useContext } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { BASE_URL } from "../../constants";
import { CardItem } from "../../components/card-item";
import styles from "./index.module.scss";
import { getDiscountPercent } from "../../utils/getDiscountPercent";
import cn from "classnames";
import { themeContext } from "../../context/theme";
import { useSelector } from "react-redux";
import { getAllCategories } from "../../store/selectors";

export const Category = () => {
  const { categoryId } = useParams();
  // const [params] = useSearchParams();
  const { theme } = useContext(themeContext);
  const categories = useSelector((state) => state.shop.category);
  const [saleItems, setSaleItems] = useState([]);

  useEffect(() => {
    fetch(`${BASE_URL}/categories/${categoryId}`)
      .then((res) => {
        return res.json();
      })
      .then(({ data }) => {
        setSaleItems([...data]);
      });
  }, []);

  return (
    <>
      <h2
        className={cn(styles.categoryTitle, {
          [styles.dark]: theme === "dark",
        })}
      >
        {categories[categoryId - 1].title}
      </h2>
      <div
        className={cn(styles.categoryInputsWrapper, {
          [styles.dark]: theme === "dark",
        })}
      >
        <span>Price</span>{" "}
        <input
          type="number"
          placeholder="from"
          className={styles.priceInputs}
        />{" "}
        <input type="number" placeholder="to" className={styles.priceInputs} />
        <span className={styles.texts}>Discounted items </span>{" "}
        <input type="checkbox" className={styles.checkboxDiscounted} />
        <span className={styles.texts}>Sorted</span>
        <select id={styles.sortedForm}>
          <option value="by default">by default</option>
          <option value="newest">newest</option>
          <option value="price: high-low">price: high-low</option>
          <option value="price: low-high">price: low-high</option>
        </select>
      </div>

      <div
        className={cn(styles.categoryWrapper, {
          [styles.dark]: theme === "dark",
        })}
      >
        {saleItems.map(({ price, discont_price, title, image, id }) => (
          <CardItem
            key={id}
            price={price}
            discont={discont_price === null ? price : discont_price}
            discontPercent={getDiscountPercent(price, discont_price)}
            title={title}
            image={image}
            id={id}
          />
        ))}
      </div>
    </>
  );
};
