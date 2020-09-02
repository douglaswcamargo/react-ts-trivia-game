export enum AnswersTypes {
  RESET_ANSWERS = '@answers/RESET_ANSWERS',
  ANSWER_QUESTION = '@answers/ANSWER_QUESTION'
}

export interface Answer {
  question: string
  correct: boolean
}

export interface AnswersState {
  readonly data: Answer[]
}
