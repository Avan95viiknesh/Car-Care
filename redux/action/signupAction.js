//   const ActionCreators = {
//   signup: (user) => ({ type: "SIGNUP", payload: { user } }),

//   login: (user) => ({ type: "LOGIN", payload: { user } }),

//   formSubmittionStatus: (status) => ({
//     type: "FORM_SUBMITION_STATUS",
//     payload: { status },
//   }),
// };

// export default ActionCreators;

import {  createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

 const signUpUser = createAsyncThunk("signupuser", async (user) => {
  try {
    const response = await axios({
      method: "POST",
      data: user,
      url:"https://fioritest.avaniko.com/User/AddUser "
    });

    console.log(response.data);

    return response.data;
  } catch (error) {
    const err = error?.response?.data?.error ?? "Unknown error";

    throw new Error(err);
  }
});

const loginUser = createAsyncThunk("loginuser", async (user) => {
  try {
    const response = await axios({
      method: "POST",
      url:"https://fioritest.avaniko.com/login",
      data: user,
    });

    return response.data;
  } catch (error) {
    const err = error?.response?.data?.error ?? "Unknown error";

    throw new Error(err);
  }
});


export default {signUpUser,loginUser}