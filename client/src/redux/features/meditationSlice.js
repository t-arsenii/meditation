//redux meditationSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from '../../utils/axios'

const initialState = {
    meditations: [],
    savedMeditations: [], // Make sure it's initialized as an array
    loading: false,
    audio: {
        isPlaying: false,
        fileId: null,
      },
};
export const insertMeditations = createAsyncThunk(
    'meditations/insertMeditations',
    async (params) => {
        try {
            const { data } = await axios.post('/meditations', params)
            return data
        } catch (error) {
            console.log(error)
        }
    },
)
export const getMeditations = createAsyncThunk('/meditations', async () => {
    try {
        const { data } = await axios.get('/meditations')
        return data
    } catch (error) {
        console.log(error)
    }
})

export const insertSavedMeditations = createAsyncThunk(
    '/meditationsSaved',
    async (params) => {
        try {
            const { data } = await axios.post('/', params)
            console.log(`Data InsertSavedd ${data}`)
            return data
        } catch (error) {
            console.log("Error w slice")
        }
    },
)
export const getSavedMeditations = createAsyncThunk('meditationsSaved', async (userId) => {
    try {
      const { data } = await axios.get(`/?userId=${userId}`);
      console.log(`Data ${data}`)
      return data;
    } catch (error) {
      console.log(error);
    }
  });
  export const removeSavedMeditation = createAsyncThunk('meditationsSaved/removemeditationsSaved', async (params) => {
    try {
        const { data } = await axios.delete(`${params.savedMeditationId}?id=${params.id}`, params.id, params.savedMeditationId)
        return data
    } catch (error) {
        console.log(error)
    }
})
export const streamAudio = createAsyncThunk(
    'meditations/streamAudio',
    async (fileId, { dispatch }) => {
      try {
        // Make an API request to the streamAudio route
        await axios.get(`/meditations/stream/${fileId}`);
        // Dispatch an action to update the audio state
        dispatch(setAudioPlaying({ isPlaying: true, fileId }));
      } catch (error) {
        console.log('Error streaming audio:', error);
      }
    }
  );
  
export const meditationSlice = createSlice({
    name: 'meditation',
    initialState,
    reducers: {
        setUserId: (state, action) => {
          state.userId = action.payload;
        },
        setAudioPlaying: (state, action) => {
          state.audio.isPlaying = action.payload.isPlaying;
          state.audio.fileId = action.payload.fileId;
        },
},
    
    extraReducers: {
        // InsertMeditation
        [insertMeditations.pending]: (state) => {
            state.loading = true
        },
        [insertMeditations.fulfilled]: (state, action) => {
            state.loading = false
            state.meditations.push(action.payload)
        },
        [insertMeditations.rejected]: (state) => {
            state.loading = false
        },
        // get Meditations
        [getMeditations.pending]: (state) => {
            state.loading = true
        },
        [getMeditations.fulfilled]: (state, action) => {
            state.loading = false
            state.meditations = action.payload
            //state.savedMeditations = action.payload.savedMeditations
        },
        [getMeditations.rejected]: (state) => {
            state.loading = false
        },
        // INsertSavedMeditation
        [insertSavedMeditations.pending]: (state) => {
            state.loading = true
        },
        [insertSavedMeditations.fulfilled]: (state, action) => {
            state.loading = false
            state.savedMeditations.push(action.payload)
            //state.popularPosts = action.payload.popularPosts
        },
        [insertSavedMeditations.rejected]: (state) => {
            state.loading = false
        },
        // get SavedMeditations
         [getSavedMeditations.pending]: (state) => {
            state.loading = true
        },
        [getSavedMeditations.fulfilled]: (state, action) => {
            state.loading = false;
            state.savedMeditations = action.payload; // Ensure that action.payload is an array
        },
        [getSavedMeditations.rejected]: (state) => {
            state.loading = false
        },
          // remove SavedMeditation
          [removeSavedMeditation.pending]: (state) => {
            state.loading = true
        },
        [removeSavedMeditation.fulfilled]: (state, action) => {
            state.loading = false
            state.savedMeditations = state.savedMeditations.filter(
                (savedMeditations) => savedMeditations?._id !== action.payload._id,
            )
        },
        [removeSavedMeditation.rejected]: (state) => {
            state.loading = false
        },
        [streamAudio.pending]: (state) =>{
            state.loading = true;
        },
        [streamAudio.fulfilled]: (state) =>{
            state.loading = false;
        },
        [streamAudio.rejected]: (state) =>{
            state.loading = false;
        },
    },
    
})



export const { setUserId , setAudioPlaying} = meditationSlice.actions;

export default meditationSlice.reducer