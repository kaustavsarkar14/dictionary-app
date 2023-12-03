import { applyMiddleware, combineReducers, createStore } from "redux";
import searchReducer from "./reducers/searchReducer";
import thunk from "redux-thunk";
import historyReducers from "./reducers/historyReducers";


const rootReducer = combineReducers({
    searchReducer,
    historyReducers
})
const store = createStore(rootReducer, applyMiddleware(thunk))

export default store
