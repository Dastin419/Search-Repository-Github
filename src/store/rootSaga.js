import { all } from 'redux-saga/effects';

import { repositoriesWatcher } from './repositories/saga';

export function* rootSaga() {
  yield all([repositoriesWatcher()]);
}
