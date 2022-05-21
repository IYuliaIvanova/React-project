import { ADD_PRODUCT } from "../../reducers/actions";

interface IProductInfo {
    title: string;
    price: string;
    id: string;
}

interface IAddReviews {
    type: typeof ADD_PRODUCT;
    payload: IProductInfo;
}

export type TCartActionTypes = IAddReviews

export const addProduct = (productInfo: IProductInfo): TCartActionTypes => {
    return {
        type: ADD_PRODUCT,
        payload: {
            ...productInfo
        }
    }
}