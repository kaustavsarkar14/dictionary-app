import { ADD_TO_HISTORY } from "../actions/actionTypes"

const historyReducers = (state = [], action)=>{
    if (action.type == ADD_TO_HISTORY) {
        return [...state, action.payload]
    }
    else return state
}

export default historyReducers