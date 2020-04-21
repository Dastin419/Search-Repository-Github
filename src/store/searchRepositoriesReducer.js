import { types } from './types';

const initialState = {
  searchValue: null,
  isLoading: false,
  repositories: [],
  totalCount: null,
  currentPage: 1,
};

const searchRepositoriesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.GET_REPOSITORIES:
      return {
        ...state,
        isLoading: true,
        searchValue: payload.searchValue,
        currentPage: payload.currentPage,
      };
    case types.REPOSITORIES_RECEIVED_SUCCESS:
      return {
        ...state,
        repositories: payload.repositories,
        totalCount: payload.totalCount,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default searchRepositoriesReducer;
