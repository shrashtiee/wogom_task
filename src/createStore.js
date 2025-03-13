import AsyncStorage from '@react-native-async-storage/async-storage';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';
import authReducer from './modules/authReducer';
import taskReducer from './modules/taskReducer'; // Import authReducer

// Define persist configs
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['auth', 'tasks'], // Persist only auth state (add other reducers if needed)
};

// Combine all reducers
const rootReducer = combineReducers({
  auth: authReducer,
  tasks: taskReducer
});


// Persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create store with middleware
export const store = createStore(persistedReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);
