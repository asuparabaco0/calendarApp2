import { combineReducers } from "redux";
import { count } from "./count/reducer";
//unifing reducers
const rootReducer = combineReducers({ count });

export default rootReducer;