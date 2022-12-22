import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "service",

  initialState,

  reducers: {
    addToShedule(state, action) {
      const itemIndex = state.serviceDetails.findIndex(
        (item) => item.id === action.payload.id
      );
      const tempItem = { ...action.payload };

      //   console.log(tempItem,"hiiiii tempppp")

      state.serviceDetails.push(tempItem);
      console.log(state.serviceDetails, "state.serviceDetails");
    },
    removeSheduleCard(state, action) {
      //

      const removeItem = state.serviceDetails.filter(
        (cartItem) => cartItem.index !== action.payload.index
      );

      state.serviceDetails = removeItem;

      // console.log(action.payload);
    },
  },
});
