import { BASE_URL } from "../../constants";

export const fetchCategoryItems = async (categoryId) => {
    const rawData = await fetch(`${BASE_URL}/categories/${categoryId}`);
    const data = await rawData.json();
    return data;
};