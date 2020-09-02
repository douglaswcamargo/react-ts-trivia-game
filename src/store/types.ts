import { QuestionsState } from './ducks/questions/types'
import { AnswersState } from './ducks/answers/types'

export interface AppState {
  questions: QuestionsState
  answers: AnswersState
}
