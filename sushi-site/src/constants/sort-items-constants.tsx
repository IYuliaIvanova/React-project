export interface ISortItemsConstantsProps {
    [key: string]: string;
}

export const DEFAULT = "По умолчанию";
export const TITLE = "Название";
export const CHEAP = "Сначала дешевле";
export const EXPENSIVE = "Сначала дороже";
export const PIECE = "Количество кусочков";
export const WEIGHT = "Вес";

export const SortItemsConstants: ISortItemsConstantsProps[] = [
    { sortValue: "По умолчанию", id: "f548f203" },
    { sortValue: "Название", id: "f5d4cf61" },
    { sortValue: "Сначала дешевле", id: "f164d386" },
    { sortValue: "Сначала дороже", id: "f57e0e68" },
    { sortValue: "Количество кусочков", id: "f261eb9d" },
    { sortValue: "Вес", id: "f508d763" },
]