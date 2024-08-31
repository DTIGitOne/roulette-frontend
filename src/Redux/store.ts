import { configureStore } from '@reduxjs/toolkit';
import LoadingSlice from './Slices/LoadingSlice';
import dateDataReducer from './Slices/DateSlice';
import SpinTimeSlice from './Slices/SpinTimeSlice';

export const store = configureStore({
  reducer: {
    loading: LoadingSlice,
    dateData: dateDataReducer, 
    spintime: SpinTimeSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
