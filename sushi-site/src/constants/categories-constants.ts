import React from "react";

export interface ICategoriesData {
    id: string;
    img: string;
    children: React.ReactNode;
}

export const CATEGORIES_DATA_DESKTOP: ICategoriesData[] = [
    { id: "f100d556", img: "chiken", children: "Чикен" },
    { id: "f21a8b4f", img: "with_eel", children: "С угрем" },
    { id: "fdf598a", img: "korndog", children: "Корн дог" },
    { id: "f24dc144", img: "pizza", children: "Пицца" },
    { id: "f1f5dbd0", img: "sales", children: "Акции" },
]

export const CATEGORIES_DATA_MOBILE: ICategoriesData[] = [
    { id: "f1596cca", img: "pizza_mob", children: "Пицца" },
    { id: "f2daa503", img: "sets", children: "Сеты" },
    { id: "f46dd854", img: "WOK", children: "WOK" },
    { id: "f5621d6e", img: "rolls", children: "Роллы" },
    { id: "f51e49f6", img: "sushi", children: "Суши" },
    { id: "f27804af", img: "sup", children: "Супы" },
    { id: "f5ac12fd", img: "salates", children: "Салаты" },
    { id: "f5175bc8", img: "drinks", children: "Напитки" },
    { id: "f35d677e", img: "kombo", children: "Комбо" },
    { id: "f21a8b4f", img: "with_eel_mob", children: "С угрем" },
    { id: "fdf598a", img: "korns_mob", children: "Корн дог" },
    { id: "f100d556", img: "chiken_mob", children: "Чикен" },
    { id: "f1f5dbd0", img: "sales_mob", children: "Акции" },
]