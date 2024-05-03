import React , {useState, useEffect} from "react";
import {BASE_URL } from "../../constants";
import {CategoriesItem } from "../../components/categories-item";
import styles from "./index.module.scss";


export const Categories = () => {
    const[categoriesItems, setCategoriesItems] = useState([]);

    useEffect(() => {
        fetch(`${BASE_URL}/categories/all`)
        .then((res)=>{
            return res.json();
        })
        .then((data)=> {
            setCategoriesItems(data)   
        })
    },[])

    console.log(categoriesItems);// Получаю массив из пяти элементов!!! 
    return (
        <>
        <h1>Categories</h1>
        <div className={styles.categories}>
            {categoriesItems.map(({image, id, title}) => {
                <CategoriesItem
                    key ={id}
                    image = {image}
                    title = {title}
                />
            })}
        </div>
        </>
    
)
}