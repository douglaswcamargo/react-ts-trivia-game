export enum QuestionsTypes {
  FETCH_QUESTIONS = '@questions/FETCH_QUESTIONS',
  FETCH_QUESTIONS_SUCCESS = '@questions/FETCH_QUESTIONS_SUCCESS',
  FETCH_QUESTIONS_ERROR = '@questions/FETCH_QUESTIONS_ERROR'
}

export interface Question {
  category: string
  type: string
  difficulty: string
  question: string
  correct_answer: string
  incorrect_answers: string[]
}

export interface QuestionsState {
  readonly data: Question[]
  readonly loading: boolean
  readonly error: boolean
}
