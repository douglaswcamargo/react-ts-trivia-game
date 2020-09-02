import { call, put } from 'redux-saga/effects'
import questions from '../../../services/questions'
import { fetchQuestionsSuccess, fetchQuestionsError } from './actions'

export function * fetch () {
  try {
    const response = yield call(questions.get, '')
    if (response.data?.response_code !== 0) {
      yield put(fetchQuestionsError())
    }

    yield put(fetchQuestionsSuccess(response.data.results))
  } catch (err) {
    yield put(fetchQuestionsError())
  }
}
