export interface INewSushiSets {
    id: string;
    img: string;
    title: string;
    price: string;
    weight: string;
    pieces: string;
    linkTo?: string;
}

export const NEW_SUSHI_SETS: INewSushiSets[] = [
    { id: "f53441f5", img: "biggestFila", title: "Самая большая Филадельфия", price: "1499", weight: "2050 грамм", pieces: "45 кусочек", linkTo: "biggestFilaDescription" },
    { id: "f1cb6d3e", img: "set6Fils", title: "Сет 6 Филадельфий", price: "1559", weight: "1320 грамм", pieces: "46 кусочек", linkTo: "set6FilsDescription" },
    { id: "f58cc817", img: "yakuzaSet", title: "Якудза сет", price: "1499", weight: "1270 грамм", pieces: "50 кусочек", linkTo: "yakuzaSetDescription" },
    { id: "f38f8ec2", img: "set4Fils", title: "Сет 4 Филадельфии", price: "1549", weight: "1100 грамм", pieces: "32 кусочек", linkTo: "set4FilsDescription" },
    { id: "f3d7b072", img: "kamikadzeSet", title: "Камикадзе сет", price: "1599", weight: "1200 грамм", pieces: "52 кусочек", linkTo: "kamikadzeSetDescription" },
    { id: "f24dd128", img: "topSet", title: "Топовый сет", price: "1519", weight: "1020 грамм", pieces: "40 кусочек", linkTo: "topSetDescription" },
    { id: "f343f351", img: "set5Fils", title: "Сет 5 Филадельфий", price: "1499", weight: "1120 грамм", pieces: "40 кусочек", linkTo: "set5FilsDescription" },
    { id: "f384405c", img: "filaAndSalamonSet", title: "Филадельфия и лосось сет", price: "1499", weight: "1260 грамм", pieces: "36 кусочек", linkTo: "filaSalmonSetDescription" },
];