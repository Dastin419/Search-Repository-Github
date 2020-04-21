import { all } from 'redux-saga/effects';
import createSagaMiddleware from 'redux-saga';
import { applyMiddleware, createStore } from 'redux';

import { actionWatcher } from './saga';
import { rootReducer } from './rootReducer';

const sagaMiddleware = createSagaMiddleware();

function* rootSaga() {
  yield all([actionWatcher()]);
}

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);
