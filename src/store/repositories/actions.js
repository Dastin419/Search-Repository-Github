import types from './types';

export const getRepositories = ({ currentPage, searchValue }) => ({
  type: types.GET_REPOSITORIES,
  payload: { currentPage, searchValue },
});
