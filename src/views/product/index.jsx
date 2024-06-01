import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../constants";
import { useSelector } from "react-redux";
import styles from "./index.module.scss";
import cn from "classnames";
import { getDiscountPercent } from "../../utils/getDiscountPercent";
import { HeartIcon } from "../../assets/icons";
import { Link } from "react-router-dom";
import { themeContext } from "../../context/theme";

export const Product = () => {
  const { itemId } = useParams();
  const { theme } = useContext(themeContext);

  const data = useSelector((state) => state.shop.items);
  let discoveredItem = data.find(({ id }) => +id === +itemId);
  //console.log(discoveredItem.categoryId, "discovered");

  const categories = useSelector((state) => state.shop.categories);
  const { title, price, discont_price, image, description } = discoveredItem;
  const discontPercent = getDiscountPercent(price, discont_price);
  // ### /products/${itemId}     - ссылка на первый продукт
  //console.log(categories);
  return (
    <>
      <div className={cn(styles.breadCrumbs, {
            [styles.dark]: theme === "dark",
          })}>
        <Link to={"/"}>
          <div>Main Page</div>
        </Link>
        {/* <hr/> */}
        <Link to={"/categories"}>
          <div>Categories</div>
        </Link>
        <Link to={`/categories/${[discoveredItem.categoryId]}`}>
          <div>{categories[discoveredItem.categoryId - 1].title}</div>
        </Link>
        <div>{title}</div>
      </div>
      <div
        className={cn(styles.productWrapper, {
          [styles.dark]: theme === "dark",
        })}
      >
        <div className={styles.product_card}>
          <div className={styles.left_card}>
            <div className={styles.product_image}>
              <img src={BASE_URL + image} alt="Secateurs" />
            </div>
          </div>
          <div className={styles.right_card}>
            <div className={styles.titleWrapper}>
              <h2
                className={cn(styles.product_title, {
                  [styles.dark]: theme === "dark",
                })}
              >
                {title}
              </h2>
              <HeartIcon
                className={cn(styles.heart, {
                  [styles.dark]: theme === "dark",
                })}
              />
            </div>

            <div
              className={cn(styles.price, {
                [styles.dark]: theme === "dark",
              })}
            >
              {discont_price === null ? "$" + price : "$" + discont_price}
              <del
                className={cn(styles.oldPrice, {
                  [styles.none]: discontPercent === 0,
                })}
              >
                {"$" + price}
              </del>
              <div
                className={cn(styles.discount, {
                  [styles.none]: discontPercent === 0,
                })}
              >
                -{discontPercent}%
              </div>
            </div>
            <div className={styles.quantity}>
              <button /*onClick={deleteCounter}*/>-</button>
              <input type="number" /*value={productCounter}*/ />
              <button /*onClick={addCounter}*/>+</button>
              <button className={styles.add_to_cart}>Add to cart</button>
            </div>
            <div
              className={cn(styles.description, {
                [styles.dark]: theme === "dark",
              })}
            >
              <p>Description</p>
              <p>{description}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
