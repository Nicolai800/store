import React, { useState, useEffect, useContext } from "react";
import { BASE_URL } from "../../constants";
import { CategoriesItem } from "../../components/categories-item";
import styles from "./index.module.scss";
import cn from "classnames";
import { themeContext } from "../../context/theme";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllCategories } from "../../store/selectors";

export const CategoriesLayout = ({ elementsCount = 5, breadCrumbs = true}) => {
 const { theme } = useContext(themeContext);
 const categoriesFromRedux = useSelector((state) => state.shop.categories);

  const [categoriesItems, setCategoriesItems] = useState([]);
 

  useEffect(() => {
    fetch(`${BASE_URL}/categories/all`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setCategoriesItems(data);
      });
  }, []);

  const filterItem = categoriesItems.filter((item, index) => {
    if (index < elementsCount) {
      return true;
    } else {
      return false;
    }
  });

  return (
    <>
    <div className={cn(styles.breadCrumbs, {
            [styles.dark]: theme === "dark",
            [styles.none]: breadCrumbs === false,
          })}>
        <Link to={"/"}>
          <div>Main Page</div>
        </Link>
        {/* <hr/> */}
        <div>Categories</div>
      </div>
    <h2 className={cn(styles.categoriesText, {
            [styles.dark]: theme === "dark",
          })}>Categories</h2>
      <div  className={cn(styles.categoriesLayout, {
          [styles.dark]: theme === "dark",
        })}>
        {filterItem.map(({ image, id, title }) => (
          <CategoriesItem image={image} title={title} key={id} id={id}/>
        ))}
      </div>
    </>
  );
};
