import axios from "axios";
import { IDataOrdering } from "../../mock-data/mockData";
import { IAxiosReviewsResponse } from "../../redux/sagas/reviewsSagas/reviewsSagas";
import { FETCH_BASE, FETCH_GET_REVIEWS } from "../fetch-constants";

export const getReviews = () =>
    axios
        .get<IAxiosReviewsResponse[]>(`${FETCH_BASE}${FETCH_GET_REVIEWS}`)


