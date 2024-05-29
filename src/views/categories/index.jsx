import React from "react";
import { Routes, Route } from "react-router-dom";
import { CategoriesLayout } from "./categories-layout";
import {Category} from '../category';


export const Categories = ({ elementsCount = 5, breadCrumbs = true}) => {


    return (
        <Routes>
            <Route path='/' element={<CategoriesLayout/>} />
            <Route path='/:categoryId' element={<Category/>}/>
        </Routes>
    );

  
};
