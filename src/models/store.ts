import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducer';
import rootSaga from './saga';

const bindMiddleware = (middleware: any) => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension');
    return composeWithDevTools(middleware)
  }
  return middleware;
};
const sagaMiddleware = createSagaMiddleware();
// export const makeStore = (context: any) => {
//   const sagaMiddleware = createSagaMiddleware();
//   const store: any = createStore(rootReducer, bindMiddleware([sagaMiddleware]));

//   store.sagaTask = sagaMiddleware.run(rootSaga);

//   return store;
// };

const { composeWithDevTools } = require('redux-devtools-extension');
export const reduxStore = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware: any) => {
    return getDefaultMiddleware().concat(bindMiddleware(sagaMiddleware))
  },
})
reduxStore.sagaTask = sagaMiddleware.run(rootSaga);
