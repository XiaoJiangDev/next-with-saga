import { all, call, delay, put, take, takeLatest, takeEvery } from 'redux-saga/effects'
import { workIncrement } from './counter/saga';

// const allEffect: any = [];

// [
//   counterEffect
// ].forEach((effect: any) => {
//   Object.keys(effect).map((key: string) => allEffect.push(takeEvery(key, effect[key])))
// });
// console.log('allEffect', allEffect)

function* rootSaga() {
  yield all([
    takeEvery('counter/increment', workIncrement)
  ])
}

export default rootSaga
