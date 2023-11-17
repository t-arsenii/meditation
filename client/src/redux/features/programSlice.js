import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from '../../utils/axios'
const initialState = {
    programs: [],
    userResult: [],
    loading: false,
};
export const insertPrograms = createAsyncThunk(
    'programs/add',
    async (params) => {
        try {
            const { data } = await axios.post('/programs/add', params)
            return data
        } catch (error) {
            console.log(error)
        }
    },
)
export const getPrograms = createAsyncThunk('/programs/get', async () => {
    try {
        const { data } = await axios.get('/programs/get')
        return data
    } catch (error) {
        console.log(error)
    }
})
export const getMyResult = createAsyncThunk('/programs/getMy', async (userId) => {
    try {
        const { data } = await axios.get(`/programs/getMy/?userId=${userId}`)
        return data
    } catch (error) {
        console.log(error)
    }
})


export const programSlice = createSlice({
    name: 'program5Day',
    initialState,
    reducers: {
        },
    extraReducers: {
        // insertPrograms
        [insertPrograms.pending]: (state) => {
            state.loading = true
        },
        [insertPrograms.fulfilled]: (state, action) => {
            state.loading = false
            state.programs.push(action.payload)
        },
        [insertPrograms.rejected]: (state) => {
            state.loading = false
        },
        // getPrograms
        [getPrograms.pending]: (state) => {
            state.loading = true
        },
        [getPrograms.fulfilled]: (state, action) => {
            state.loading = false
            state.programs = action.payload
            //state.savedMeditations = action.payload.savedMeditations
        },
        [getPrograms.rejected]: (state) => {
            state.loading = false
        },
        //getMyResult
        [getMyResult.pending]: (state) => {
            state.loading = true
        },
        [getMyResult.fulfilled]: (state, action) => {
            state.loading = false;
            state.userResult = action.payload; // Ensure that action.payload is an array
        },
        [getMyResult.rejected]: (state) => {
            state.loading = false
        },
       
    },
})



export default programSlice.reducer