import { configureStore } from '@reduxjs/toolkit';
import LoadingSlice from './Slices/LoadingSlice';
import dateDataReducer from './Slices/DateSlice';

export const store = configureStore({
  reducer: {
    loading: LoadingSlice,
    dateData: dateDataReducer, 
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
