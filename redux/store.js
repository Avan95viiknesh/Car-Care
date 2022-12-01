import { combineReducers, applyMiddleware} from 'redux';
import { legacy_createStore as createStore } from 'redux';
import thunk from 'redux-thunk';
import themeReducer from './reducer' ;


const rootReducer = combineReducers({themeReducer});

export const store = createStore(rootReducer, applyMiddleware(thunk));