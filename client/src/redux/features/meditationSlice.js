import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from '../../utils/axios'
const initialState = {
    meditations: [],
    savedMeditations: [],
    loading: false,  
}
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
export const getOneMeditation = createAsyncThunk('/oneMeditation', async (meditationId) => {
    try {
        const { data } = await axios.get(`${meditationId}`,meditationId)
        return data
    } catch (error) {
        console.log(error)
    }
})
export const insertSavedMeditations = createAsyncThunk(
    '/meditationsSaved',
    async (params) => {
        try {
            const { data } = await axios.post('/meditationsSaved', params)
            return data
        } catch (error) {
            console.log("Error w slice")
        }
    },
)
export const getSavedMeditations = createAsyncThunk('meditationsSaved', async (userId) => {
    try {
      const { data } = await axios.get(`/meditationsSaved?userId=${userId}`);
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

export const meditationSlice = createSlice({
    name: 'meditation',
    initialState,
    reducers: {
        setUserId : (state, action) => {
        state.userId = action.payload
    }},
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
          // get One meditations
          [getOneMeditation.pending]: (state) => {
            state.loading = true
        },
        [getOneMeditation.fulfilled]: (state, action) => {
            state.loading = false
            state.meditations = action.payload
            //state.savedMeditations = action.payload.savedMeditations
        },
        [getOneMeditation.rejected]: (state) => {
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
            state.loading = false
            state.savedMeditations = action.payload
            //state.popularPosts = action.payload.popularPosts
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
                (savedMeditations) => savedMeditations._id !== action.payload._id,
            )
        },
        [removeSavedMeditation.rejected]: (state) => {
            state.loading = false
        },
    },
})

export const { setUserId} = meditationSlice.actions;

export default meditationSlice.reducer