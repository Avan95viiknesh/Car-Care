import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from '../reducer/slice';

export default configureStore({
  reducer: {
    counter : counterReducer
  },
})