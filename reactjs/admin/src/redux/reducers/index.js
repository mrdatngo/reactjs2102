import { combineReducers } from "redux";
import counterReducer from "./counter";
import authReducer from "./auth";
import postsReducer from "./posts";
/// more reducers here

export default combineReducers({
  counter: counterReducer,
  auth: authReducer,
  posts: postsReducer,
});
