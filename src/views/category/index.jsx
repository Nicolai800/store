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
import { Link } from "react-router-dom";
import {
  fetchAllItems,
  fetchAllCategories,
  fetchCategory,
} from "../../store/async-actions";
import { useDispatch } from "react-redux";

export const Category = () => {
  const { categoryId } = useParams();
  const dispatch = useDispatch();

  // const [params] = useSearchParams();
  useEffect(() => {
    dispatch(fetchAllItems());
    dispatch(fetchAllCategories());
  }, [dispatch]);

  const { theme } = useContext(themeContext);
  const categories = useSelector(getAllCategories);
  const category = categories.find(({ id }) => id === Number(categoryId));
  
  //console.log(categories[categoryId - 1].title);

  const [categoryItems, setCategoryItems] = useState([]);

  // useEffect(() => {
  //   setCategoryItems(fetchCategory(Number(categoryId)));
  // });

  useEffect(() => {
    fetch(`${BASE_URL}/categories/${categoryId}`)
      .then((res) => {
        return res.json();
      })
      .then(({ data }) => {
        setCategoryItems([...data]);
      });
  }, []);

  // console.log(categoryId);
  // console.log(category);

  const [isChecked, setIsChecked] = useState(false);
  const [sortOrder, setSortOrder] = useState("by default");
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(0);

  const minValueChange = (event) => {
    setMinValue(event.target.value);
  };
  const maxValueChange = (event) => {
    setMaxValue(event.target.value);
  };

  const sortChange = (event) => {
    setSortOrder(event.target.value);
  };

  const sortedItems = [...categoryItems].sort((a, b) => {
    if (sortOrder === "price: high-low") {
      return b.price - a.price;
    } else if (sortOrder === "price: low-high") {
      return a.price - b.price;
    } else if (sortOrder === "newest") {
      return new Date(b.updatedAt) - new Date(a.updatedAt);
    } else {
      return a.id - b.id;
    }
  });

  const checkboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const filteredAndSortedItems =
    !minValue && !maxValue
      ? sortedItems
      : sortedItems
          .filter((item) => item.price >= minValue && item.price <= maxValue)
          .sort((a, b) => a.price - b.price);

  return (
    <>
      <div className={styles.breadCrumbs}>
        <Link to={"/"}>
          <div>Main Page</div>
        </Link>
        <hr />
        <Link to={"/categories"}>
          <div>Categories</div>
        </Link>
        <hr />
        <div>{categories[categoryId - 1].title}</div>
      </div>
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
          onChange={minValueChange}
          className={styles.priceInputs}
        />{" "}
        <input
          type="number"
          placeholder="to"
          onChange={maxValueChange}
          className={styles.priceInputs}
        />
        <span className={styles.texts}>Discounted items </span>{" "}
        <input
          type="checkbox"
          onChange={checkboxChange}
          className={styles.checkboxDiscounted}
        />
        <span className={styles.texts}>Sorted</span>
        <select id={styles.sortedForm} onChange={sortChange}>
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
        {(isChecked === true
          ? filteredAndSortedItems.filter(
              ({ discont_price }) => discont_price !== null
            )
          : filteredAndSortedItems
        ).map(({ price, discont_price, title, image, id }) => (
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
