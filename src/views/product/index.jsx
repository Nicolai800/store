import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../constants";
import { useSelector, useDispatch } from "react-redux";
import styles from "./index.module.scss";
import cn from "classnames";
import { getDiscountPercent } from "../../utils/getDiscountPercent";
import { HeartIcon } from "../../assets/icons";
import { Link } from "react-router-dom";
import { themeContext } from "../../context/theme";
import { toggleToLikes } from "../../store/shop-slice";
import { setProductCart } from "../../store/cart-slice";
import { ProductImgModal } from "../../components/product-img-modal";

export const Product = () => {
  const { itemId } = useParams();
  const { theme } = useContext(themeContext);
  const dispatch = useDispatch();
  const likesData = useSelector((state) => state.shop.likesData);
  const data = useSelector((state) => state.shop.items);
  let discoveredItem = data.find(({ id }) => +id === +itemId);
  //console.log(discoveredItem.categoryId, "discovered");
  const [isImgModalOpen, setIsImgModalOpen] = useState(false);

  const categories = useSelector((state) => state.shop.categories);
  const { title, price, discont_price, image, description } = discoveredItem;
  const discontPercent = getDiscountPercent(price, discont_price);
  // ### /products/${itemId}     - ссылка на первый продукт
  // console.log(likesData);

  const likeToggle = (articul) => {
    dispatch(toggleToLikes(articul));
  };
  const onToggleImgModal = () => {
    setIsImgModalOpen((prev) => !prev);
  };

  const [productCounter, setProductCounter] = useState(1);
  const addCounter = () => {
    setProductCounter(productCounter + 1);
  };
  const deleteCounter = () => {
    if (productCounter > 1) {
      setProductCounter(productCounter - 1);
    }
  };
  const addToCard = (counter, id) => {
    dispatch(setProductCart({ productCounter: counter, id }));
    setProductCounter(1);
  };
  console.log(productCounter);
  return (
    <>
      <div
        className={cn(styles.breadCrumbs, {
          [styles.dark]: theme === "dark",
        })}
      >
        <Link to={"/"}>
          <div>Main Page</div>
        </Link>
         <hr/>
        <Link to={"/categories"}>
          <div>Categories</div>
        </Link>
        <hr/>
        <Link to={`/categories/${[discoveredItem.categoryId]}`}>
          <div>{categories[discoveredItem.categoryId - 1].title}</div>
        </Link>
        <hr/>
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
              <img src={BASE_URL + image} alt="Secateurs" onClick={()=>onToggleImgModal()}/>
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
                id={itemId}
                likeToggle={likeToggle}
                className={cn(styles.heart, {
                  [styles.dark]: theme === "dark",
                  [styles.checked]: likesData[itemId],
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
            <div className={cn(styles.quantity, {
                  [styles.dark]: theme === "dark",
                })}>
              <button onClick={deleteCounter}>-</button>
              <span>{productCounter}</span>
              <button onClick={addCounter}>+</button> 
            </div>
            <button
              onClick={() => addToCard(productCounter, itemId)}
              className={styles.addToCart}
            >
              Add to cart
            </button>
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
      {isImgModalOpen && <ProductImgModal onToggleImgModal={onToggleImgModal} image={image}/>}
    </>
  );
};
