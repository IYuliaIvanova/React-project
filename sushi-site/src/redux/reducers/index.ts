import { combineReducers } from 'redux';
import reviewsReducer from './reviewsReducer/reviewsReducer.ts';

const rootReducer = combineReducers({
    reviews: reviewsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
