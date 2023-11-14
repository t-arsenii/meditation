import { createSlice } from '@reduxjs/toolkit';

const moodSlice = createSlice({
  name: 'mood',
  initialState: {
    moodData: {},
  },
  reducers: {
    setMoodData: (state, action) => {
      state.moodData = action.payload;
    },
  },
});

export const { setMoodData } = moodSlice.actions;
export const selectMoodData = (state) => state.mood.moodData;
export default moodSlice.reducer;
