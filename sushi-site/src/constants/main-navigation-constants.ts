interface IMainNavigationData {
    path: string;
    name: string;
    id: string;
}

export const MAIN_NAVIGATION: IMainNavigationData[] = [
    { id: "f593ec5", path: "pizza", name: "Пицца" },
    { id: "f1af1b1f", path: "sets", name: "Сеты" },
    { id: "f4ce4fd0", path: "wok", name: "WOK" },
    { id: "f3f2c32e", path: "rols", name: "Роллы" },
    { id: "f9241fc", path: "sushi", name: "Суши" },
    { id: "f2c981c5", path: "salats", name: "Салаты" },
    { id: "f4ef109d", path: "soup", name: "Супы" },
    { id: "f398e8f5", path: "cornDogs", name: "Корн доги" },
    { id: "f1f24652", path: "drinks", name: "Напитки" },
    { id: "f5830821", path: "sales", name: "Акции" },
]

// const id = `f${(~~(Math.random()*1e8)).toString(16)}`
// console.log(id) использовать для генератора ид
