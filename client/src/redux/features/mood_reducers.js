import { combineReducers } from 'redux';
import moodReducer from './moodSlice';

const rootReducer = combineReducers({
  mood: moodReducer,
});

export default rootReducer;
