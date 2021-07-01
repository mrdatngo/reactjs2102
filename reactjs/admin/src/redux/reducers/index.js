import { combineReducers } from "redux";
import counterReducer from "./counter";
import authReducer from "./auth";
/// more reducers here

export default combineReducers({ counter: counterReducer, auth: authReducer });
