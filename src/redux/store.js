import { configureStore } from '@reduxjs/toolkit';
import cryptoReducer from './Currency/CriptoSlice';

const store = configureStore({
  reducer: {
    cryptoList: cryptoReducer,
  },
});
export default store;
