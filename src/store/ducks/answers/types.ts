export enum QuizTypes {
  RESET_RESULTS = '@questions/FETCH_QUESTIONS',
  ANSWER_QUESTION = '@questions/FETCH_QUESTIONS_SUCCESS'
}

export interface Answer {
  question: string
  correct: boolean
}

export interface QuizState {
  readonly results: Answer[]
}
