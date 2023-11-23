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
  
const initialState = {
    messages: [], 
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
  });
  
  export const { addMessage, setMessages } = chatSlice.actions;
  
  export default chatSlice.reducer;