import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const customerData = createAsyncThunk(
  "Customerdata",
  async (customer) => {
    // let userToken = AsyncStorage.getItem("currentUser");

    // let new_token = JSON.parse(userToken);
    
    try {
      const response = await axios({
        method: "POST",
        url: "https://fioritest.avaniko.com/Customer/AddCustomer",
        data: customer,
        headers: {
          Authorization: `Bearer 3Ve8B8Tvcv975hPGnCUf4fjrm9cMQpbcAFw-qN_wqUXoXYJLlb5Q9vC_QfsccvhcEUPVKXiMJ0rZV9wJF25utcfOJe8Zo769MOqTBZL954XGhzng5RHQ01cCPczjq_j2_zje67xyqQf_zyTQammImxCOYzdopvu3DPCVazS7M-Ski4hhPxGl5BtuEGB0bU9IsL1bAho8SyjN2ztedhmfvZ2y6RT0tFksemZskhPEf29W2vKRHWP5G9t4NWxJepWgUCwwNxLEcHb0BB4rbEPLlTd2H-D9h2z8FjPHXcdmWYtFQkhCmdhMvVO0SBuOJNxj`,
          "Content-Type":"application/json",
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
