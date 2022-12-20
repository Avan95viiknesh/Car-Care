 

 const ADD_TOAST = 'ADD_TOAST'

 const addToast = (message) => (dispatch) => {
    dispatch({
        type: ADD_TOAST,
        payload:message
    });
}


export default {
    addToast
}






