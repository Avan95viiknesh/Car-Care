import {SET_DARK_THEME }  from '../action/action'

           
const initialState = {
    theme : 'light',
}

 const themeReducer =(state = initialState, action) => {
    switch(action.type){
        case  SET_DARK_THEME :
            return {...state, theme: action.payload};
        default :
            return state;    
    }
}

export default themeReducer;