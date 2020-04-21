import types from './types';

export const getRepositories = ({ currentPage = 1, searchValue }) => ({
  type: types.GET_REPOSITORIES,
  payload: { currentPage, searchValue },
});

export const getRepositoriesSuccess = (repositories, totalCount) => ({
  type: types.REPOSITORIES_RECEIVED_SUCCESS,
  payload: {
    repositories,
    totalCount,
  },
});

export const getRepositoriesFailed = () => ({
  type: types.GET_REPOSITORIES_FAILED,
});
