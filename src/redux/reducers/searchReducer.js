import { SEARCH_WORD_FAILURE, SEARCH_WORD_SUCCESS } from "../actions/actionTypes"

const searchReducer = (state=[], action)=>{
    if(action.type == SEARCH_WORD_SUCCESS){
        console.log("success")
        return action.payload
    }
    else if(action.type == SEARCH_WORD_FAILURE){
        console.log("error")
        return ["error"]
    }
    else return state
}


export default searchReducer