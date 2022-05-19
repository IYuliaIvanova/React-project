import { ADD_REVIEWS, GET_REVIEWS_FAILURE, GET_REVIEWS_STARTED, GET_REVIEWS_SUCCESS } from "../actions";
import { IErrorProps, IRequestErrorProps, IReviewsProps, TReviewsActionTypes } from "../../actions/reviewsActionCreators/actionCreators";
import { IAxiosReviewsResponse } from "../../sagas/reviewsSagas/reviewsSagas";


export interface IInitialState {
    reviews: IReviewsProps[];
    isLoading: boolean;
    error: null | IErrorProps;
}

const initialState: IInitialState = {
    reviews: [] as IReviewsProps[],
    isLoading: false,
    error: null
};

const reviewsReducer = (state = initialState, { payload, type }: TReviewsActionTypes): IInitialState => {
    switch (type) {
        case ADD_REVIEWS :
            return {
                ...state, reviews: [
                    ...state.reviews, {
                        id: (payload as IReviewsProps).id,
                        reviewsText: (payload as IReviewsProps).reviewsText,
                        userName: (payload as IReviewsProps).userName,
                    }
                ]
            };
        case GET_REVIEWS_STARTED:
            return {
                ...state, isLoading: true,
            };
        case GET_REVIEWS_SUCCESS:
            const reviews = (payload as IAxiosReviewsResponse[]).map((item) => ({ ...item, reviewsText: item.body, userName: item.name, id: item.id }));
            return {
                ...state, reviews: [
                    ...reviews as IReviewsProps[]
                ], isLoading: false, error: null
            };
        case GET_REVIEWS_FAILURE:
            return {
                ...state, error: (payload as IRequestErrorProps).error, isLoading: false,
            };
        default:
            return state;
    }
}

export default reviewsReducer;