import { createSlice } from '@reduxjs/toolkit';

export const SpinTimeSlice:any = createSlice({
  name: 'spintime',
  initialState: {
    spinTimer: 20000,
  },
  reducers: {
   setSpinTime: (state, action) => {
      return {
         ...state,
         spinTimer: action.payload,
      };
   },
  },
});

export const { setSpinTime } = SpinTimeSlice.actions;

export default SpinTimeSlice.reducer;
