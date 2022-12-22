import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  serviceDetails: [],
};

const cartSlice = createSlice({
  name: "service",

  initialState,

  reducers: {
    addToCart(state, action) {
      const itemIndex = state.serviceDetails.findIndex(
        (item) => item.id === action.payload.id
      );
      const tempItem = { ...action.payload };

      //   console.log(tempItem,"hiiiii tempppp")

      state.serviceDetails.push(tempItem);
    },
    removeSheduleCard(state, action) {
      //

      const removeItem = state.serviceDetails.filter(
        (cartItem) => cartItem.id !== action.payload.id
      );

      state.serviceDetails = removeItem;

      // console.log(action.payload);
    },
  },
});

export const { addToCart, removeSheduleCard } = cartSlice.actions;

export default cartSlice.reducer;
