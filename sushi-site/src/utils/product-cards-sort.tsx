import { INewSushiSets } from "../constants/new-sushi-sets";
import { CHEAP, EXPENSIVE, PIECES_COUNT, TITLE, WEIGHT } from "../constants/sort-items-constants";

export const productCardsSort = (sortValue: string, setArray: (value: any) => void, array: INewSushiSets[]) => { // типизация ???
    const copySushiSets = [...array]
    switch (sortValue) {
        case TITLE:
            return setArray(
                copySushiSets.sort((a, b) => a.title > b.title ? 1 : -1)
            );
        case CHEAP:
            return setArray(
                copySushiSets.sort((a, b) => a.price > b.price ? 1 : -1)
            );
        case EXPENSIVE:
            return setArray(
                copySushiSets.sort((a, b) => a.price < b.price ? 1 : -1)
            );
        case PIECES_COUNT:
            return setArray(
                copySushiSets.sort((a, b) => a.pieces > b.pieces ? 1 : -1)
            );
        case WEIGHT:
            return setArray(
                copySushiSets.sort((a, b) => a.weight < b.weight ? 1 : -1)
            );
        default:
            return setArray(array)
    }
}