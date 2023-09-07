import { all, call, delay, put, take, takeLatest, takeEvery } from 'redux-saga/effects';
import { actionTypes } from './reducer';

export function* workIncrement() {
  yield put({
    type: actionTypes.LOAD
  });
  yield delay(1000) 
  yield put({
    type: actionTypes.INCREMENT
  });
  yield put({
    type: actionTypes.LOAD
  });
}

// const effects = {
//   'counter/increment': workIncrement,
// }

// export default effects;

