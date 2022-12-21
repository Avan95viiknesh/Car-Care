// const initialState = {

//     profile: {
//     name: '',
//     mobile: '',
//     password: '',
//     isLoggedIn: false,
//   },

// }

// const signReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case  'LOGIN':
//     console.log('login', action.payload.user)
//       return {
//         ...state,
//         profile: action.payload.user,
//         isLoggedIn: true // after update user formsubmition reset
//       }

//       case  'SIGNUP':
//         console.log('signup', action.payload.user)
//           return {
//             ...state,
//             profile: action.payload.user,
//             isLoggedIn: true // after update user formsubmition reset
//           }

//     case  'FORM_SUBMITION_STATUS':
//       return {
//         ...state,
//         formSubmitted: action.payload.status
//       }
//     default:
//       return state;
//   }
// }

// export default signReducer;

import signupAction from "../action/signupAction";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createSlice } from "@reduxjs/toolkit";

 const authSlice = createSlice({
  name: "user",

  initialState: {
    userInfo: {},

    err: "",
  },

  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(signupAction.signUpUser.fulfilled, (state, action) => {});

    builder.addCase(signupAction.signUpUser.pending, (state, action) => {});

    builder.addCase(signupAction.signUpUser.rejected, (state, action) => {
      state.err = action.error.message;
    });

    builder.addCase(signupAction.loginUser.fulfilled, (state, action) => {
      AsyncStorage.setItem("currentUser", JSON.stringify(action.payload));

     // AsyncStorage.getItem("currentUser", JSON.stringify(action.payload));

      state.userInfo = action.payload;
    });

    builder.addCase(signupAction.loginUser.pending, (state, action) => {});

    builder.addCase(signupAction.loginUser.rejected, (state, action) => {
      state.err = action.error.message;
    });
  },
});

export default authSlice.reducer;
