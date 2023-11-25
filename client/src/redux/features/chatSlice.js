//redux chatSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from '../../utils/axios'

export const fetchUsers = createAsyncThunk(
    'chat/users',
    async () => {
      try {
        const { data } = await axios.get('chat/users');
        return data;
      } catch (error) {
        console.error(error);
        throw error;
      }
    }
  );

  export const fetchMessages = createAsyncThunk(
    'chat/messages',
    async ({ sender, receiver }) => {
      try {
        const { data } = await axios.get(`chat/messages?sender=${sender}&receiver=${receiver}`);
        return data;
      } catch (error) {
        console.error(error);
        throw error;
      }
    }
  );
  
const initialState = {
    messages: [], 
    users:[]
  };

  const chatSlice = createSlice({
    name: 'chat',
    initialState,
    reducers: {
      addMessage(state, action) {
        state.messages.push(action.payload);
      },
      setMessages(state, action) {
        state.messages = action.payload;
      },
    },
    extraReducers: {
      //Get all users
      [fetchUsers.pending]: (state) => {
       // state.isLoading = true
       // state.status = null
    },
    [fetchUsers.fulfilled]: (state, action) => {
        //state.isLoading = false
        //state.status = action.payload?.message
        state.users = action.payload
        
    },
    [fetchUsers.rejectWithValue]: (state, action) => {
       // state.status = action.payload.message
       // state.isLoading = false
    },

    },
  });
  
  export const { addMessage, setMessages } = chatSlice.actions;
  
  export default chatSlice.reducer;