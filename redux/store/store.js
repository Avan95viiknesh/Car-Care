import { combineReducers, applyMiddleware} from 'redux';
import { legacy_createStore as createStore } from 'redux';
import thunk from 'redux-thunk';
import themeReducer from '../reducer/reducer'; 
import toastMessage from '../reducer/toastReducer';


const rootReducer = combineReducers({themeReducer,toastMessage});

export const store = createStore(rootReducer, applyMiddleware(thunk));