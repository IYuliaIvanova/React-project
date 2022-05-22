import { IDataOrdering } from "../../mock-data/mockData";
import { FETCH_BASE, FETCH_POST_ORDER } from "../fetch-constants";

export const sendOrdering = async (data: IDataOrdering) => {
    const response = await fetch(`${FETCH_BASE}${FETCH_POST_ORDER}`,{
        method: 'POST',
        body: JSON.stringify(data),
    })

    return await response.json()
}


