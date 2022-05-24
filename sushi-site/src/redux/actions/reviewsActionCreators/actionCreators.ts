import { ADD_REVIEWS, ADD_ASYNC_REVIEWS, GET_REVIEWS_FAILURE, GET_REVIEWS_STARTED, GET_REVIEWS_SUCCESS } from "../../reducers/actions";
import { ActionCreator } from "redux";
import {IAxiosReviewsResponse} from "../../sagas/reviewsSagas/reviewsSagas";

export interface IErrorProps {
    code: number;
    message: string;
}

export interface IRequestErrorProps {
    error: IErrorProps
}

export interface IReviewsProps {
    id: number;
    userName: string;
    reviewsText: string;
}

interface IAddReviewsProps {
    type: typeof ADD_REVIEWS;
    payload: IReviewsProps;
}

interface IAddAsyncReviewsProps {
    type: typeof ADD_ASYNC_REVIEWS;
    payload: {};
}

interface IGetReviewsStartedProps {
    type: typeof GET_REVIEWS_STARTED;
    payload: {};
}

interface IGetReviewsSuccessProps {
    type: typeof GET_REVIEWS_SUCCESS;
    payload: IAxiosReviewsResponse[];
}

interface IGetReviewsFailureProps {
    type: typeof GET_REVIEWS_FAILURE;
    payload: IRequestErrorProps;
}

export type TReviewsActionTypes =
    IAddReviewsProps
    | IAddAsyncReviewsProps
    | IGetReviewsStartedProps
    | IGetReviewsSuccessProps
    | IGetReviewsFailureProps

export const addReviews = (task: IReviewsProps): TReviewsActionTypes => {
    return {
        type: ADD_REVIEWS,
        payload: {
            ...task
        }
    }
}

export const addAsyncReviews= (): TReviewsActionTypes => {
    return {
        type: ADD_ASYNC_REVIEWS,
        payload: {}
    }
}

export const getReviewsStarted: ActionCreator<TReviewsActionTypes> = () => ({
    type: GET_REVIEWS_STARTED,
    payload: {}
});

export const getReviewsSuccess: ActionCreator<TReviewsActionTypes> = (reviews: IAxiosReviewsResponse[]) => ({
    type: GET_REVIEWS_SUCCESS,
    payload: [
        ...reviews
    ]
});

export const getReviewsFailure: ActionCreator<TReviewsActionTypes> = (error: IErrorProps) => ({
    type: GET_REVIEWS_FAILURE,
    payload: {
        error
    }
});





