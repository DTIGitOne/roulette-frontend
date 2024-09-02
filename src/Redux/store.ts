import { configureStore } from '@reduxjs/toolkit';
import LoadingSlice from './Slices/LoadingSlice';
import dateDataReducer from './Slices/DateSlice';
import newHistorySlice from './Slices/newHistorySlice';

export const store = configureStore({
  reducer: {
    loading: LoadingSlice,
    dateData: dateDataReducer, 
    newHistory: newHistorySlice
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
