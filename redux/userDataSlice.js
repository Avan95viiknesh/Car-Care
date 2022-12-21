import { createSlice } from "@reduxjs/toolkit";

// import { ToastAndroid } from "react-native";

import Toast from "react-native-toast-message";

const initialState = {
  cartItems: [],

  cartTotalQuantity: 0,

  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: "service",

  initialState,

  reducers: {
    addToCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      const tempItem = {...action.payload};

    //   console.log(tempItem,"hiiiii tempppp")

  state.cartItems.push(tempItem);
    //   console.log(action.payload, "idd");

    //   if (itemIndex >= 0) {
    //     state.cartItems[itemIndex].cartQuantity += 1;

    //     Toast.show({
    //       type: "success",

    //       text1: `your service has been sheduled successfully`,
    //     });

    //     state.cartItems[itemIndex].currentPrice += action.payload.intialPrice;

    //     // alert("added to cart increased");
    //   } else {
       

        // alert("added to cart ");

        // ToastAndroid.showWithGravity(

        //   `${action.payload.name} Added To Cart`,

        //   ToastAndroid.SHORT,

        //   ToastAndroid.CENTER,

        // );

    //     Toast.show({
    //       type: "success",

    //       text1: `Hello Thanks for contacting`,

    //       text2: "We will get back to you soon!!👋",
    //     });
    //   }

    //   //   state.cartItems.push(action.payload);

    //   //   console.log(state.cartItems);
    // },
      },
    removeFromCart(state, action) {
      //

      const removeItem = state.cartItems.filter(
        (cartItem) => cartItem.id !== action.payload.id
      );

      state.cartItems = removeItem;

      // console.log(action.payload);
    },
    increaseItems(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      // console.log(itemIndex, " check");

      if (state.cartItems[itemIndex].cartQuantity > 0) {
        state.cartItems[itemIndex].cartQuantity += 1;

        // console.log(action.payload);

        state.cartItems[itemIndex].currentPrice += action.payload.intialPrice;
      }
    },

    decreaseItems(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;

        state.cartItems[itemIndex].currentPrice -= action.payload.intialPrice;
      } else if (state.cartItems[itemIndex].cartQuantity === 1) {
        const removeItem = state.cartItems.filter(
          (item) => item.id !== action.payload.id
        );

        state.cartItems = removeItem;
      }
    },
  },
});

export const { addToCart, removeFromCart, increaseItems, decreaseItems } =
  cartSlice.actions;

export default cartSlice.reducer;
