// moodSlice   //redux moodSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../utils/axios';

const initialState = {
  moodData: [],
  loading: false,
  error: null,
  userId: null,
};

export const setMoodData = createAsyncThunk('mood/setMoodData', async (payload, { dispatch }) => {
  dispatch({ type: 'mood/setMoodData/pending' });
  try {
    // Simulating an asynchronous operation
    const response = await new Promise(resolve => setTimeout(() => resolve(payload), 1000));
    dispatch({ type: 'mood/setMoodData/fulfilled', payload: response });
  } catch (error) {
    dispatch({ type: 'mood/setMoodData/rejected', error: error.message });
  }
});

export const setLoading = createAsyncThunk('mood/setLoading', async (payload, { dispatch }) => {
  dispatch({ type: 'mood/setLoading/pending' });
  try {
    // Simulating an asynchronous operation
    const response = await new Promise(resolve => setTimeout(() => resolve(payload), 1000));
    dispatch({ type: 'mood/setLoading/fulfilled', payload: response });
  } catch (error) {
    dispatch({ type: 'mood/setLoading/rejected', error: error.message });
  }
});

export const setError = createAsyncThunk('mood/setError', async (payload, { dispatch }) => {
  dispatch({ type: 'mood/setError/pending' });
  try {
    // Simulating an asynchronous operation
    const response = await new Promise(resolve => setTimeout(() => resolve(payload), 1000));
    dispatch({ type: 'mood/setError/fulfilled', payload: response });
  } catch (error) {
    dispatch({ type: 'mood/setError/rejected', error: error.message });
  }
});

export const selectMoodData = (state) => state.mood.moodData;

export const addMoodRecord = ({ date, mood }) => async (dispatch) => {
  dispatch(setLoading(true));

  try {
    // Send the mood data to the server
    const response = await axios.post(`/api/addMood`, { date, mood });

    if (response.status === 201) {
      // Optionally, update the local state after a successful record addition
      dispatch(fetchMoodData());
      dispatch(setLoading(false));
      dispatch(setError(null));
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
    // Fetch mood data from the server
    const response = await axios.get(`/api/getMoodData`);

    if (response.status === 200) {
      const moodDataObject = response.data.reduce((acc, moodRecord) => {
        acc[moodRecord.date] = moodRecord.mood;
        return acc;
      }, {});

      dispatch(setMoodData(moodDataObject));
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

const moodSlice = createSlice({
  name: 'mood',
  initialState,
  reducers: {
    setUserId: (state, action) => {
      state.userId = action.payload;
    },},
  extraReducers: (builder) => {
    builder
      .addCase(setMoodData.pending, (state) => {
        state.loading = true;
      })
      .addCase(setMoodData.fulfilled, (state, action) => {
        state.loading = false;
        state.moodData = action.payload;
      })
      .addCase(setMoodData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(setLoading.pending, (state) => {
        state.loading = true;
      })
      .addCase(setLoading.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(setLoading.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(setError.pending, (state) => {
        state.loading = true;
      })
      .addCase(setError.fulfilled, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      
      .addCase(setError.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});
export const { setUserId } = moodSlice.actions;
export default moodSlice.reducer;
