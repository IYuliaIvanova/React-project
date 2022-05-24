import { ADD_PRODUCT } from "../actions";
import { TCartActionTypes } from "../../actions/cartActionCreators/actionCreators";

interface IInitialState {
    title: string;
    price: string;
    id: string;
}

const initialState: IInitialState[] = []

export const cartReducer = (state = initialState, { payload, type }: TCartActionTypes) => {
    console.log(state)
    switch (type) {
        case ADD_PRODUCT:
            const cond = state.some(item => {
                return item.id === payload.id;
            });

            return  cond ? state : [...state, payload];
        default:
            return state;
    }
}