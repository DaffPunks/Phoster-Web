import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import { userReducer } from "./userReducer";

// main reducers
export const reducers = combineReducers({
  routing: routerReducer,
  userReducer: userReducer
  // your reducer here
});
