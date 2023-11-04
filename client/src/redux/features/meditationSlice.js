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
export const meditationSlice = createSlice({
    name: 'meditation',
    initialState,
    reducers: {},
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
            //state.popularPosts = action.payload.popularPosts
        },
        [getMeditations.rejected]: (state) => {
            state.loading = false
        },
    },
})

export default meditationSlice.reducer