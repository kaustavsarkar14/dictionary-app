import { CLEAR_SEARCH, SEARCH_WORD_FAILURE, SEARCH_WORD_SUCCESS } from "../actions/actionTypes"

const searchReducer = (state=[], action)=>{
    if(action.type == SEARCH_WORD_SUCCESS){
        return action.payload
    }
    else if(action.type == SEARCH_WORD_FAILURE){
        return ["error"]
    }
    else if (action.type==CLEAR_SEARCH){
        return []
    }
    else return state
}


export default searchReducer