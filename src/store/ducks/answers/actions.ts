import { action } from 'typesafe-actions'
import { Answer, QuizTypes } from './types'

export const answerQuestion = (data: Answer) => {
  return action(QuizTypes.ANSWER_QUESTION, { data })
}

export const resetResults = () => {
  return action(QuizTypes.RESET_RESULTS)
}
