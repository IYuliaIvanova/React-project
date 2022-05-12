interface IMainNavigationData {
    path: string;
    name: string;
    id: string;
    navigateTo: string;
}

export const MAIN_NAVIGATION: IMainNavigationData[] = [
    { id: "f593ec5", path: "pizza", name: "Пицца", navigateTo: "pizza" },
    { id: "f1af1b1f", path: "sets", name: "Сеты", navigateTo: "sushiSets" },
    { id: "f4ce4fd0", path: "wok", name: "WOK", navigateTo: "pizza" },
    { id: "f3f2c32e", path: "rols", name: "Роллы", navigateTo: "pizza" },
    { id: "f9241fc", path: "sushi", name: "Суши", navigateTo: "pizza" },
    { id: "f2c981c5", path: "salats", name: "Салаты", navigateTo: "pizza" },
    { id: "f4ef109d", path: "soup", name: "Супы", navigateTo: "pizza" },
    { id: "f398e8f5", path: "cornDogs", name: "Корн доги", navigateTo: "pizza" },
    { id: "f1f24652", path: "drinks", name: "Напитки", navigateTo: "pizza" },
    { id: "f5830821", path: "sales", name: "Акции", navigateTo: "pizza" },
]