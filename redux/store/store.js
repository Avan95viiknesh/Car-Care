import { combineReducers, applyMiddleware} from 'redux';
import { legacy_createStore as createStore } from 'redux';
import thunk from 'redux-thunk';
import themeReducer from '../reducer/reducer'; 
import toastMessage from '../reducer/toastReducer';
//import signReducer from '../reducer/signupReducer';
import counter from '../reducer/counterReducer';
// import authSlice from '../reducer/signupReducer';
import { configureStore } from "@reduxjs/toolkit";
import authsliceReducer from '../authsliceReducer';


// const rootReducer = combineReducers({themeReducer,authSlice,counter });

//export const store = createStore(rootReducer, applyMiddleware(thunk));

export const store = configureStore({
    reducer: {
    
      user: authsliceReducer, 
      themeReducer
    },
  });