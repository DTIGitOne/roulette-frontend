import { createSlice } from '@reduxjs/toolkit';

export const DateDataSlice:any = createSlice({
  name: 'dateData',
  initialState: {
    month: <string | null>(null),
    day: <string | null>(null),
    year: <string | null>(null)
  },
  reducers: {
   setMonth: (state, action) => {
    state.month = action.payload;
   },
   setDay: (state, action) => {
    state.day = action.payload;
   },
   setYear: (state, action) => {
    state.year = action.payload;
   },
  },
});

export const { setMonth , setDay , setYear } = DateDataSlice.actions;

export default DateDataSlice.reducer;
