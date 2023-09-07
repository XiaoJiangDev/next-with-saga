import { all, call, delay, put, take, takeLatest, takeEvery } from 'redux-saga/effects';
import { actionTypes } from './reducer';

export function* workIncrement() {
  yield delay(1000) 
  yield put({
    type: actionTypes.INCREMENT
  })
}

// const effects = {
//   'counter/increment': workIncrement,
// }

// export default effects;

