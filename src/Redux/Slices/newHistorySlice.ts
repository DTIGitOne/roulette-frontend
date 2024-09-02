import { createSlice } from '@reduxjs/toolkit';

export const newHistorySlice:any = createSlice({
  name: 'newHistory',
  initialState: {
    historyArray: null,
  },
  reducers: {
   setNewHistory: (state, action) => {
      return {
         ...state,
         historyArray: action.payload,
      };
   },
  },
});

export const { setNewHistory } = newHistorySlice.actions;

export default newHistorySlice.reducer;
