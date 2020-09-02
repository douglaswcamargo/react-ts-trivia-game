import { action } from 'typesafe-actions'
import { Question, QuestionsTypes } from './types'

export const fetchQuestions = () => {
  return action(QuestionsTypes.FETCH_QUESTIONS)
}

export const fetchQuestionsSuccess = (data: Question[]) => {
  return action(QuestionsTypes.FETCH_QUESTIONS_SUCCESS, { data })
}

export const fetchQuestionsError = () => {
  return action(QuestionsTypes.FETCH_QUESTIONS_ERROR)
}
