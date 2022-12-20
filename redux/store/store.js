import { combineReducers, applyMiddleware} from 'redux';
import { legacy_createStore as createStore } from 'redux';
import thunk from 'redux-thunk';
import themeReducer from '../reducer/reducer'; 
import toastMessage from '../reducer/toastReducer';
import signReducer from '../reducer/signupReducer';
import counter from '../reducer/counterReducer';


const rootReducer = combineReducers({themeReducer,toastMessage,counter,signReducer});

export const store = createStore(rootReducer, applyMiddleware(thunk));