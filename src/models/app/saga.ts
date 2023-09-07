import { all, call, delay, put, take, takeLatest, takeEvery } from 'redux-saga/effects'
import { actionTypes, increment, decrement, reset } from './actions'

export function* watchIncrement() {
  yield takeEvery('watchIncrement', workIncrement);
}

export function* workIncrement() {
  yield delay(1000) 
  yield put(increment())
}

function* rootSaga() {
  yield all([
    watchIncrement(),
    // workIncrement(),
  ])
}

export default rootSaga
