import React from "react";
import { Routes, Route } from "react-router-dom";
import { CategoriesLayout } from "./categories-layout";
import {Category} from '../category';


export const Categories = ({ elementsCount, breadCrumbs}) => {


    return (
        <Routes>
            <Route path='/' element={<CategoriesLayout  elementsCount={elementsCount} breadCrumbs={breadCrumbs}/>} />
            <Route path='/:categoryId' element={<Category/>}/>
        </Routes>
    );

  
};
