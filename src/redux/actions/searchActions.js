import { CLEAR_SEARCH, SEARCH_WORD_FAILURE, SEARCH_WORD_SUCCESS } from "./actionTypes"

export const searchWord = (query)=>{
    return async (dispatch)=>{
        try {
            const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${query}`)
            const data = await res.json()
            if(data.title=='No Definitions Found')
                dispatch({
                    type : SEARCH_WORD_FAILURE,
                    payload : data
                })
            
            else dispatch({
                type : SEARCH_WORD_SUCCESS,
                payload : data
            })
        }
        catch(err){
            dispatch({
                type : SEARCH_WORD_FAILURE,
                payload : err.message
            })
        }
    }
}

export const clearSearch = ()=>{
    return {
        type : CLEAR_SEARCH,
    }
}

