import { all, takeLatest } from 'redux-saga/effects'
import { QuestionsTypes } from './questions/types'
import { fetch } from './questions/sagas'

function* rootSaga () {
  return yield all([takeLatest(QuestionsTypes.FETCH_QUESTIONS, fetch)])
}

export default rootSaga
