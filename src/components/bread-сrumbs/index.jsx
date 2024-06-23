import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import cn from "classnames";
import { themeContext } from "../../context/theme";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import styles from "./index.module.scss";
import { getAllItems, getAllCategories } from "../../store/selectors";

export const BreadCrumbs = () => {
  const location = useLocation();
  const { theme } = useContext(themeContext);
  const arrayPathname = location.pathname.split("/");
  const allItems = useSelector(getAllItems);
  const allCategories = useSelector(getAllCategories);
  console.log(arrayPathname);
  console.log(allCategories);

  return (
    <>
      {" "}
      <div
        className={cn(styles.breadCrumbs, {
          [styles.dark]: theme === "dark",
        })}
      >
        <Link to={"/"}>
          <div>Main Page</div>
        </Link>
         <hr />
        <Link to={"/categories"}>
          <div>{arrayPathname[1]}</div>
        </Link>
        <hr />
        <Link to={`/categories/${arrayPathname[2]}`}>
          <div>{allCategories[arrayPathname[2]-1].title}</div>
        </Link>
        <hr />
        <div>{allItems[arrayPathname[4]].title}</div>
      </div>
    </>
  );
};

//http://localhost:3000/categories/4/products/25
// нужны все категории и все товары
