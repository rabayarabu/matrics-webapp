import { configureStore } from '@reduxjs/toolkit';
import cryptoReducer from './Currency/CriptoSlice';

const store = configureStore({
  reducer: {
    crytoList: cryptoReducer,
  },
});
export default store;
