import { Reducer } from 'redux'
import { QuestionsTypes, QuestionsState } from './types'

const INITIAL_STATE: QuestionsState = {
  data: [],
  error: false,
  loading: true
}

// eslint-disable-next-line @typescript-eslint/default-param-last
const reducer: Reducer<QuestionsState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case QuestionsTypes.FETCH_QUESTIONS:
      return {
        ...state,
        loading: true,
        error: false
      }
    case QuestionsTypes.FETCH_QUESTIONS_SUCCESS:
      return {
        ...action.payload,
        loading: false,
        error: false
      }
    case QuestionsTypes.FETCH_QUESTIONS_ERROR:
      return {
        ...state,
        loading: false,
        error: true
      }
    default:
      return state
  }
}

export default reducer
