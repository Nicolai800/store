import React, { useEffect, useState, useContext, useMemo, useCallback } from "react";
import { useParams, useSearchParams } from "react-router-dom";
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
} from "../../store/async-actions";
import { useDispatch } from "react-redux";
import {fetchCategoryItems} from '../../utils/fetchers/fetch-category-items';
import {sortItems} from '../../utils/sortItems';

export const Category = () => {
  const { categoryId } = useParams();
  const dispatch = useDispatch();
  const [categoryItemsObj, setCategoryItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [st, rerender] = useState({}); // TODO delete it

  // const [params] = useSearchParams();
  useEffect(() => {
    dispatch(fetchAllItems());
    dispatch(fetchAllCategories());
    // dispatch(fetchCategory(categoryId));
  }, [dispatch, categoryId]);

  const { theme } = useContext(themeContext);
  const categories = useSelector(getAllCategories);


  useEffect(() => {
    setIsLoading(true);
    fetchCategoryItems(categoryId).then((data) => {
      setCategoryItems(data);
      setIsLoading(false);
    });
  }, [categoryId]);

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

  const sortedItems = useMemo(() => sortItems(sortOrder, categoryItemsObj.data), [sortOrder, categoryItemsObj]);

  const checkboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  console.log(categoryItemsObj);

  // TODO вынести в утилитку
  const filteredAndSortedItems =
    !minValue && !maxValue
      ? sortedItems
      : sortedItems
          .filter((item) => item.price >= minValue && item.price <= maxValue)
          .sort((a, b) => a.price - b.price);

  return (
    isLoading ? <h1>LOADING</h1> : 
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
        <div>{categoryItemsObj.category?.title}</div>
      </div>
      <button onClick={() => rerender({})}>rerender</button>
      <h2
        className={cn(styles.categoryTitle, {
          [styles.dark]: theme === "dark",
        })}
      >
        {categoryItemsObj.category?.title}
      </h2>
      <div
        className={cn(styles.categoryInputsWrapper, {
          [styles.dark]: theme === "dark",
        })}
      >
        <span>Price</span>
        <input
          type="number"
          placeholder="from"
          onChange={minValueChange}
          className={styles.priceInputs}
        />
        <input
          type="number"
          placeholder="to"
          onChange={maxValueChange}
          className={styles.priceInputs}
        />
        <span className={styles.texts}>Discounted items </span>
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
