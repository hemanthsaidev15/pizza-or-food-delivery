// store.js

import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './redux/cartSlice';
const store = configureStore({
  reducer: {
    name:cartSlice
  },
});

export default store;
