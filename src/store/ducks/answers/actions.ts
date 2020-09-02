import { action } from 'typesafe-actions'
import { Answer, AnswersTypes } from './types'

export const answerQuestion = (answer: Answer) => {
  return action(AnswersTypes.ANSWER_QUESTION, answer)
}

export const resetResults = () => {
  return action(AnswersTypes.RESET_ANSWERS)
}
