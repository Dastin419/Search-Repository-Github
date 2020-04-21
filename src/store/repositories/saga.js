import { put, takeLatest, call } from 'redux-saga/effects';
import { message } from 'antd';

import constants from '../../constants';
import types from './types';
import { getRepositoriesSuccess, getRepositoriesFailed } from './actions';
import { repositoriesTransformFromServer } from './transforms';
import { getRepositories } from '../../api';

function* fetchRepositories({ payload }) {
  try {
    const params = {
      q: payload.searchValue,
      sort: 'stars',
      page: payload.currentPage,
    };
    const searchParams = new URLSearchParams(params);

    const url = `${constants.SERVER_URL}/search/repositories?${searchParams.toString()}`;

    const { data, status } = yield call(getRepositories, url);

    if (status < 400) {
      const repositories = repositoriesTransformFromServer(data.items);

      yield put(getRepositoriesSuccess(repositories, data.total_count));
    } else {
      message.error('Error fetch data');
    }
  } catch (error) {
    message.error(error);
    yield put(getRepositoriesFailed());
  }
}

export function* repositoriesWatcher() {
  yield takeLatest(types.GET_REPOSITORIES, fetchRepositories);
}
