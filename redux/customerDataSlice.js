import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const customerData = createAsyncThunk(
  "Customerdata",
  async (customer) => {
    let userToken = await AsyncStorage.getItem("currentUser");

    let new_token = JSON.parse(userToken);
    
    try {
      const response = await axios({
        method: "POST",
        url: "https://fioritest.avaniko.com/Customer/AddCustomer",
        data: customer,
        headers: {
          Authorization: `Bearer ${new_token.access_token}`,
        },

      });

      return response.data;
    } catch (error) {
      const customerError = error?.response?.data?.error ?? "Unknown error";
      console.log(error, "check error");
      throw new Error(customerError);
    }
  }
);

export const authSlice = createSlice({
  name: "customer",

  initialState: {
    customerInfo: "",

    addErr: "",
  },

  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(customerData.fulfilled, (state, action) => {});

    builder.addCase(customerData.pending, (state, action) => {});

    builder.addCase(customerData.rejected, (state, action) => {
      state.signupErr = action.error.message;
    });
  },
});

export default authSlice.reducer;
