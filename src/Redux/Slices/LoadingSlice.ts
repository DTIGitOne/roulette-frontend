import { createSlice } from '@reduxjs/toolkit';

export const LoadingSlice:any = createSlice({
  name: 'loading',
  initialState: {
    loading: false,
  },
  reducers: {
   setLoading: (state, action) => {
      return {
         ...state,
         loading: action.payload,
      };
   },
  },
});

export const { setLoading } = LoadingSlice.actions;

export default LoadingSlice.reducer;
