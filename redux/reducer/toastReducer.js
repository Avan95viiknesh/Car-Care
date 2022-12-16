import { ADD_TOAST } from '../action'  

function toastMessage (state = null, action) {
  switch (action.type) {
    case ADD_TOAST:
      return action.message
    default:
      return state
  }
}

export default toastMessage;

// export default combineReducers({
//   appState,
//   toastMessage,
//   connect: (state = null) => state
// })