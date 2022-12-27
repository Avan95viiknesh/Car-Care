import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

// const initialState = {
//   serviceDetails: [],
// };


export const customerData = createAsyncThunk("customerData",
  async (customer) => {
    let userToken = await AsyncStorage.getItem("currentUser");

    let new_token = JSON.parse(userToken);
  //  console.log(new_token, "VIKY CHECK TOKEN")
 
    try {
      const response = await axios({
        method: "POST",
        url: "https://fioritest.avaniko.com/Customer/AddCustomer",
        data: customer,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${new_token.access_token}`,
        },

      });

      return response.data;
   
    } catch (error) {
      const customerError = error?.response?.data?.error ?? "Unknown error";
     // console.log(error, "check error");
      throw new Error(customerError);
    }

  }
  
);


export const serviceData = createAsyncThunk("serviceData",
  async (customer) => {
     let userToken = await AsyncStorage.getItem("currentUser");

    let new_token = JSON.parse(userToken);
  //  console.log(new_token, "SERVICE TOKEN")
    try {
      const response = await axios({
        method: "POST",
        url: "https://fioritest.avaniko.com/Customer/AddService",
        data: customer,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${new_token.access_token}`,
         },
       
      });

      return response.data;
    } catch (error) {
      const serviceError = error?.response?.data?.error ?? "Unknown error";
    //  console.log(error, "check error");
      throw new Error(serviceError);
    }
  }
);


export const getServiceData = createAsyncThunk("getServiceData",
  async (customer) => {
    //  let userToken = await AsyncStorage.getItem("currentUser");

    // let new_token = JSON.parse(userToken);
    // console.log(new_token.access_token, "SERVICEGETttttttt TOKEN")
    try {
      const response = await axios({
        method: "GET",
        url: "https://fioritest.avaniko.com/Customer/GetCustomerServList",
        data: customer,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer
          auYgzUxX_CJRHkNnhq6e_TO2z9eHAb4E7hVELLbE9C2y-1Q7nP62seJuwdkwev6gavyc14miDz_ZLOWPIiCFXfbeHWvX77dT6oTK4I7QxCjRtBP26sZu_927jPm7YBMmENVBUphTF3-N4H9HvXPJe_ohIreuDNVBSeC240xgybrm9bDEam17Ywh09OvxzA7nqvYsuQA-HUQRTVwVdHfoCuD5366rsHtvbfbExY-8xIQdwhlKyNflzH3FvsAhRmx9pQzrU_QxPA-4FQk3q0PGuzd0LhL-E-h5OqcwdSOKkZ3YRAavz_2LjrXj7WDGie4n`,
         },
       
      });
    //  console.log(response,"check resrrrr")
      return response.data;

    } catch (error) {
      const getSerError = error?.response?.data?.error ?? "Unknown error";
      console.log(error, "check error");
      throw new Error(getSerError);
    }
  }
);


export const authSlice = createSlice({
  name: "customer",

  initialState: {
    customerInfo: [],
    cusErr: "",
    serErr:"",
    getSerErr:""
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
    builder.addCase(customerData.fulfilled, (state, action) => {
       state.customerInfo = action.payload;
      
    });

    builder.addCase(customerData.pending, (state, action) => {});

    builder.addCase(customerData.rejected, (state, action) => {
      state.cusErr = action.error.message;
    });


    builder.addCase(serviceData.fulfilled, (state, action) => {
     // AsyncStorage.getItem("currentUser", JSON.stringify(action.payload));

     state.customerInfo = action.payload;
  });

    builder.addCase(serviceData.pending, (state, action) => {});

    builder.addCase(serviceData.rejected, (state, action) => {
      state.serErr = action.error.message;
    });



    builder.addCase(getServiceData.fulfilled, (state, action) => {
 
     state.customerInfo = action.payload;
     console.log(action.payload,"checking function");
   });
 
     builder.addCase(getServiceData.pending, (state, action) => {});
 
     builder.addCase(getServiceData.rejected, (state, action) => {
       state.getSerErr = action.error.message;
     });
 


  },
});

export default authSlice.reducer;
