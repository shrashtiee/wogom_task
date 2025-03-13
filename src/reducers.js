// src/reducers.js
import { combineReducers } from "redux";
import taskReducer from "./modules/taskReducer";
import authReducer from "./modules/authReducer";

export default combineReducers({
  tasks: taskReducer,
  auth: authReducer,
});
