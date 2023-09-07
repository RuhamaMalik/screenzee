import { configureStore } from '@reduxjs/toolkit';
import homeREducer from './homeSlice';

export const store = configureStore({
  reducer: {
    home: homeREducer,
  },
})