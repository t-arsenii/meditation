import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const SERVER_URL = 'http://localhost:3000';

const moodSlice = createSlice({
  name: 'mood',
  initialState: {
    moodData: {},
    loading: false,
    error: null,
  },
  reducers: {
    setMoodData: (state, action) => {
      state.moodData = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setMoodData, setLoading, setError } = moodSlice.actions;

export const selectMoodData = (state) => state.mood.moodData;

// Асинхронна функція для запису настрою до бази даних
export const addMoodRecord = (date, mood) => async (dispatch) => {
  dispatch(setLoading(true));

  try {
    const response = await axios.post(`${SERVER_URL}/api/addMood`, { date, mood });
    if (response.status === 201) {
      dispatch(setLoading(false));
      dispatch(setError(null));
      // Опціонально оновіть дані після запису, якщо це потрібно
      dispatch(fetchMoodData()); // Припустимо, що у вас є функція fetchMoodData для оновлення стану
    } else {
      throw new Error('Failed to add mood record');
    }
  } catch (error) {
    dispatch(setLoading(false));
    dispatch(setError(error.message));
  }
};
export const fetchMoodData = () => async (dispatch) => {
  dispatch(setLoading(true));

  try {
    const response = await axios.get(`${SERVER_URL}/api/getMoodData`); // Замініть URL на ваш сервер
    if (response.status === 200) {
      dispatch(setMoodData(response.data));
      dispatch(setLoading(false));
      dispatch(setError(null));
    } else {
      throw new Error('Failed to fetch mood data');
    }
  } catch (error) {
    dispatch(setLoading(false));
    dispatch(setError(error.message));
  }
};

export default moodSlice.reducer;
