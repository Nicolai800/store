import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import cn from "classnames";
import { themeContext } from "../../context/theme";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import styles from "./index.module.scss";
import { getAllItems, getAllCategories } from "../../store/selectors";

export const BreadCrumbs = ({ crumbs = true }) => {
  const location = useLocation();
  const { theme } = useContext(themeContext);
  const arrayPathname = location.pathname.split("/");
  const allItems = useSelector(getAllItems);
  const allCategories = useSelector(getAllCategories);

  const getArrayPathnameInObjects = (
    arrayPathname,
    allItems,
    allCategories
  ) => {
    const result = [];
    if (arrayPathname[1]) {
      result.push({
        title:
          arrayPathname[1].charAt(0).toUpperCase() + arrayPathname[1].slice(1),
        currentLink: `/${arrayPathname[1]}`,
      });
    }
    if (arrayPathname[2]) {
      result.push({
        title: allCategories[arrayPathname[2] - 1].title,
        currentLink: `/${arrayPathname[1]}/${arrayPathname[2]}`,
      });
    }
    if (arrayPathname[4]) {
      result.push({
        title: allItems[arrayPathname[4] - 1].title,
        currentLink: `/${arrayPathname[1]}/${arrayPathname[2]}/products/${arrayPathname[4]}`,
      });
    }
    return result;
  };
  const crumb = getArrayPathnameInObjects(
    arrayPathname,
    allItems,
    allCategories
  );

  return (
    <>
      {" "}
      <div
        className={cn(styles.breadCrumbs, {
          [styles.dark]: theme === "dark",
          [styles.none]: crumbs === false,
        })}
      >
        <Link to={"/"}>
          <div>Main Page</div>
        </Link>
        {crumb.map((crumb) => (
          <>
            <hr />
            <Link to={crumb.currentLink}>
              <div key={crumb.length}>{crumb.title} </div>
            </Link>
          </>
        ))}
      </div>
    </>
  );
};
