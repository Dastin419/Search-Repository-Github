import { put, takeLatest, call } from 'redux-saga/effects';
import memoizee from 'memoizee';
import { message } from 'antd';

import constants from '../constants';
import { types } from './types';
import { getAPICall } from '../api';

const getRepositoriesCallOptimised = memoizee(getAPICall, {
  primitive: true,
});

function* fetchRepositories({ payload }) {
  const url = `${constants.BASE_URL}/search/repositories?q=${payload.searchValue}&sort=stars&page=${payload.currentPage}`;
  const response = yield call(getRepositoriesCallOptimised, url);

  const { data, status } = response;
  if (status < 400) {
    yield put({
      type: types.REPOSITORIES_RECEIVED_SUCCESS,
      payload: {
        repositories: data.items,
        totalCount: data.total_count,
      },
    });
  } else {
    message.error('Error fetch data');
  }
}

export function* actionWatcher() {
  yield takeLatest(types.GET_REPOSITORIES, fetchRepositories);
}
