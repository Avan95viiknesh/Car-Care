import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

// const initialState = {
//   serviceDetails: [],
// };


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




export const serviceData = createAsyncThunk(
  "Servicedata",
  async (service) => {
    // let userToken = await AsyncStorage.getItem("currentUser");

    // let new_token = JSON.parse(userToken);
    // console.log(new_token, "SERVICE TOKEN")
    try {
      const response = await axios({
        method: "POST",
        url: "https://fioritest.avaniko.com/Customer/AddService",
        data: service,
        headers: {
          "Content-Type": "application/json",
          Authorization:"Bearer 0BHU-PIr3TqZHmOq28sD3ZTGaVkd97AyUe4a3QwyAKRMpevDBMykTFgnPrym02XTKYHMlwkYPS8DRDPjbO8KOVoU8hAY7P45-zybW2pgb6vfox8U581Lr08UVwQmB5Gjob4xkfAj-0mqnim_mp7AlYDfLILm2nPlGZ4Kef31K8DIIBd0WHkp9VooyNAm-JYfWjl0g8EPWUZgwS60TdfL2A_fx_A2TLAgXGo-kdxYLD3U81wn7LE-Au4VOIJhR3-7nRq59FzSoG84D4bwPTbt6zQ6PbZWbRRV63BgghMyUK9hGPdzksdGg5OEqfDNTBmn",
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

  reducers: {

    // addToShedule(state, action) {
      
    //   const tempItem = { ...action.payload };

    //   //   console.log(tempItem,"hiiiii tempppp")

    //   state.serviceDetails.push(tempItem);
    //   console.log(state.serviceDetails,"state.serviceDetails")
    // },

  },

  extraReducers: (builder) => {
    builder.addCase(customerData.fulfilled, (state, action) => {});

    builder.addCase(customerData.pending, (state, action) => {});

    builder.addCase(customerData.rejected, (state, action) => {
      state.signupErr = action.error.message;
    });
  },
});

export default authSlice.reducer;
