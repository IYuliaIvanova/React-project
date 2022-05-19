import { all, put, takeLatest, call, select } from "redux-saga/effects";
import { getReviews } from "../../../api/fetchRequest/fetchReviews";
import { ADD_ASYNC_REVIEWS } from "../../reducers/actions";
import { getReviewsStarted, getReviewsSuccess, getReviewsFailure, IErrorProps } from "../../actions/reviewsActionCreators/actionCreators";

export interface IAxiosReviewsResponse {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
}

function* fetchTodoSaga() {
    try {
        yield put(
            getReviewsStarted()
        );
        const response: { data: IAxiosReviewsResponse[], error: IErrorProps } = yield call(getReviews);
        if (response.data) {
            yield put(
                getReviewsSuccess(response.data)
            );
        } else if (response.error) {
            yield put(
                getReviewsFailure(response.error)
            );
        }
    } catch (e) {
        yield put(
            getReviewsFailure(e)
        );
    }
}

function* reviewsSaga() {
    yield all([takeLatest(ADD_ASYNC_REVIEWS, fetchTodoSaga)]);
}

export default reviewsSaga;
