import { combineReducers } from 'redux';
import checkNetwork from './checkNetwork';
import authReducer from './authReducer';
import taskReducer from './taskReducer';

const rootReducer = combineReducers({       
  checkNetwork,     
  authReducer    ,
  taskReducer
});

export default rootReducer;
