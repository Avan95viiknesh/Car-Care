import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  serviceDetails: [],
};

const cartSlice = createSlice({
  name: "service",

  initialState,

  reducers: {
    addToShedule(state, action) {
      // const itemIndex = state.serviceDetails.findIndex(
      //   (item) => item.id === action.payload.id
      // );
      const tempItem = { ...action.payload };

      //   console.log(tempItem,"hiiiii tempppp")

      state.serviceDetails.push(tempItem);
      console.log(state.serviceDetails,"state.serviceDetails")
    },
    removeSheduleCard(state, action) {
      //

      const removeItem = state.serviceDetails.filter(
        (cartItem) => cartItem.index !== action.payload.index
      );

      state.serviceDetails = removeItem;

      // console.log(action.payload);
    },
    
   
    deleteSchedule(state, action,field){
      // let index = state.serviceDetails.findIndex(function(employee) {
      //   return employee.id === 2;
      // });
      // // slice index with id 2
      // state.serviceDetails = [...state.serviceDetails.slice(0, index), ...state.serviceDetails.slice(index - 1)];
      // console.log(state.serviceDetails);
       
  //     return {...state.serviceDetails.filter(element => element.item !== action.payload.item),

  //   filters : {
  //     ...state.filters,
  //     [action.field]: [...state.filters[action.field]]
  //     .filter((x, index) => index !== action.index)
  //   }
  
  // }

  
  
    }

 
  },
});

export const { addToShedule, removeSheduleCard,deleteSchedule } = cartSlice.actions;

export default cartSlice.reducer;
