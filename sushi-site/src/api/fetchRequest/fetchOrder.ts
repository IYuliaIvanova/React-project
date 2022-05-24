import axios from "axios";
import { IDataOrdering } from "../../mock-data/mockData";
import { FETCH_BASE, FETCH_POST_ORDER } from "../fetch-constants";

export const sendOrdering = (data: IDataOrdering) => 
    axios
        .post(`${FETCH_BASE}${FETCH_POST_ORDER}`, data)


