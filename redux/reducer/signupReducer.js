 

const initialState = {
    profile: {
    name: '', 
    mobile: '',
    password: '',  
    isLoggedIn: false,
  },
 
}

const signReducer = (state = initialState, action) => {
  switch (action.type) {
    case  'LOGIN':
    console.log('login', action.payload.user)
      return {
        ...state,
        profile: action.payload.user,
        isLoggedIn: true // after update user formsubmition reset
      }

      case  'SIGNUP':
        console.log('signup', action.payload.user)
          return {
            ...state,
            profile: action.payload.user,
            isLoggedIn: true // after update user formsubmition reset
          }
    
    case  'FORM_SUBMITION_STATUS':
      return {
        ...state,
        formSubmitted: action.payload.status
      }
    default:
      return state;
  }
}

export default signReducer;