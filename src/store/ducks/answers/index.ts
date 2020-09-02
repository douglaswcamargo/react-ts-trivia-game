import { Reducer } from 'redux'
import { AnswersTypes, AnswersState } from './types'

const INITIAL_STATE: AnswersState = {
  data: []
}

// eslint-disable-next-line @typescript-eslint/default-param-last
const reducer: Reducer<AnswersState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AnswersTypes.RESET_ANSWERS:
      return {
        data: []
      }
    case AnswersTypes.ANSWER_QUESTION:
      return {
        data: [...state.data, action.payload]
      }
    default:
      return state
  }
}

export default reducer
