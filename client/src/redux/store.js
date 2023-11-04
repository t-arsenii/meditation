import { combineReducers, configureStore} from '@reduxjs/toolkit'
import authSlice from './features/auth/authSlice'
import questionReducer from './features/question_reducer'
import resultReducer from './features/result_reducer'
// const rootReducer = combineReducers({
//     questions: questionReducer
// })

export const store = configureStore ({
    reducer: {
        auth: authSlice,
        questions: questionReducer,
        result: resultReducer
    },
})
//export default configureStore({reducer: rootReducer});
