export const SET_DARK_THEME = 'SET_DARK_THEME';


export const setTheme = (theme) => (dispatch) => {
    dispatch({
        type: SET_DARK_THEME,
        payload: theme
    });
}

export const ADD_TOAST = 'ADD_TOAST'
 
export const addToast = (message) => (dispatch) => {
    dispatch({
        type: ADD_TOAST,
        payload:message
    });
}