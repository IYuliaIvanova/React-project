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
            let x
            if (!cond) {
                x = [...state, payload]
            } else {
                x = state
            }
            return x;
        default:
            return state;
    }
}