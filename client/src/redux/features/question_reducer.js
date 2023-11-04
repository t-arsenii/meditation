import { createSlice } from "@reduxjs/toolkit"

/** create slice */
export const questionReducer = createSlice({
    name: 'questions',
    initialState: {
        que: [],
        answers: [],
        trace: 0  /** zmina pytannia jak bye 1 to byde druge pytannia */
    },
    reducers : {
        startTestAction : (state, action) => {
            let { question, answers} = action.payload
            return {
                ...state,
                que : question,
                answers
            }
        },
        moveNextAction : (state) => {
            return {
                ...state,
                trace : state.trace + 1
            }
        }
    }
})
export const {startTestAction, moveNextAction} = questionReducer.actions
export default questionReducer.reducer;