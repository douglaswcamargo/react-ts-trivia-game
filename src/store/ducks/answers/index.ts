import { Reducer } from 'redux'
import { QuizState, QuizTypes } from './types'

const INITIAL_STATE: QuizState = {
  results: []
}

// eslint-disable-next-line @typescript-eslint/default-param-last
const reducer: Reducer<QuizState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case QuizTypes.RESET_RESULTS:
      return {
        data: []
      }
    case QuizTypes.ANSWER_QUESTION:
      return {
        data: [...state.data, action.payload]
      }
    default:
      return state
  }
}

export default reducer
