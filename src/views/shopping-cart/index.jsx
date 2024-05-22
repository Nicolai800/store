import React, { useEffect, useContext } from "react";
import { CardItem } from "../../components/card-item";
import styles from "."
import { setItems } from "./index.module.scss"
import { useDispatch, useSelector } from "react-redux";
import { BASE_URL } from "../../constants";
import { getDiscountPercent } from "../../utils/getDiscountPercent";
import { themeContext } from "../../context/theme";
import cn from "classnames";


export const ShoppingCart = ()=>{


    return (
        <div>Shoping Cart</div>
    )
}