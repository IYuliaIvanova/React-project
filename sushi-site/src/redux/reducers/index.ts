import { combineReducers } from 'redux';
import { cartReducer } from './cartReducer/cartReducer';
import reviewsReducer from './reviewsReducer/reviewsReducer.ts';

const rootReducer = combineReducers({
    reviews: reviewsReducer,
    cart: cartReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
