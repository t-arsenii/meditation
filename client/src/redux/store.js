import { combineReducers, configureStore} from '@reduxjs/toolkit'
import authSlice from './features/auth/authSlice'
import questionReducer from './features/question_reducer'
import resultReducer from './features/result_reducer'
import meditationSlice from './features/meditationSlice'
import moodReducer from './features/mood_reducers'
// const rootReducer = combineReducers({
//     questions: questionReducer
// })

export const store = configureStore ({
    reducer: {
        auth: authSlice,
        questions: questionReducer,
        result: resultReducer,
        meditation: meditationSlice,
        mood: moodReducer
    },
})
//export default configureStore({reducer: rootReducer});
