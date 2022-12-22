import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios"; 

export const signUpUser = createAsyncThunk("signupuser", async (user) => {
  try {
    const response = await axios({
      method: "POST",
      url:"https://fioritest.avaniko.com/User/AddUser",
      data: user,
    });

    console.log(response.data);

    return response.data;
  } catch (error) {
    const signError = error?.response?.data?.error ?? "Unknown error";

    throw new Error(signError);
  }
});

export const loginUser = createAsyncThunk("loginuser", async (user) => {
  try {
    const response = await axios( {
      method: "POST",
      url: "https://fioritest.avaniko.com/login",
      data: user,
    });

    return response.data;
  } catch (error) {
    const logError = error?.response?.data?.error ?? "Unknown error";
console.log(error,"check error")
    throw new Error(logError);
  }
});

export const authSlice = createSlice({
  name: "user",

  initialState: {
    userInfo: "",

    loginErr: "",
    signupErr: "",
  },

  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(signUpUser.fulfilled, (state, action) => {});

    builder.addCase(signUpUser.pending, (state, action) => {});

    builder.addCase(signUpUser.rejected, (state, action) => {
      state.signupErr = action.error.message;
    });

    builder.addCase(loginUser.fulfilled, (state, action) => {
        AsyncStorage.setItem("currentUser", JSON.stringify(action.payload));

       // AsyncStorage.getItem("currentUser", JSON.stringify(action.payload));

      state.userInfo = action.payload;
    });

    builder.addCase(loginUser.pending, (state, action) => {});

    builder.addCase(loginUser.rejected, (state, action) => {
      state.loginErr = action.error.message;
    });
  },
});

export default authSlice.reducer;
