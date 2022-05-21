import { all, fork } from "redux-saga/effects";
import reviewsSaga from "./reviewsSagas/reviewsSagas";

export function* rootSaga() {
    yield all([fork(reviewsSaga)]);
}
