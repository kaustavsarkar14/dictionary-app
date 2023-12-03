import {ADD_TO_HISTORY} from "./actionTypes"

export const addToHistory = (query)=>{
    return {
        type : ADD_TO_HISTORY,
        payload : query
    }
}