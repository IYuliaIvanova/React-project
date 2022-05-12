export interface IPopularSushiSets {
    id: string;
    img: string;
    title: string;
    price: string;
    weight: string;
    pieces: string;
}

export const POPULAR_SUSHI_SETS: IPopularSushiSets[] = [
    { id: "f309608a", img: "yakuzaSet", title: "Якудза сет", price: "1499 СОМ", weight: "1270 грамм", pieces: "50 кусочек" },
    { id: "f1ffbf30", img: "topSet", title: "Топовый сет", price: "1519 СОМ", weight: "1020 грамм", pieces: "40 кусочек" },
    { id: "f48f0a0b", img: "set6Fils", title: "Сет 6 Филадельфий", price: "1559 СОМ", weight: "1320 грамм", pieces: "46 кусочек" },
    { id: "f4e2de1a", img: "set5Fils", title: "Сет 5 Филадельфий", price: "1499 СОМ", weight: "1120 грамм", pieces: "40 кусочек" },
    { id: "f432a69f", img: "kamikadzeSet", title: "Камикадзе сет", price: "1599 СОМ", weight: "1200 грамм", pieces: "52 кусочек" },
    { id: "f25885e2", img: "set4Fils", title: "Сет 4 Филадельфии", price: "1549 СОМ", weight: "1100 грамм", pieces: "32 кусочек" },
    { id: "f448c76d", img: "biggestFila", title: "Самая большая Филадельфия", price: "1499 СОМ", weight: "2050 грамм", pieces: "45 кусочек" },
];
