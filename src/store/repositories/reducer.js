import types from './types';

const initialState = {
  searchValue: null,
  repositories: [],
  totalCount: null,
  currentPage: 1,
  isLoading: false,
  isFailed: false,
};

const searchRepositoriesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.GET_REPOSITORIES:
      return {
        ...state,
        searchValue: payload.searchValue,
        currentPage: payload.currentPage,
        isLoading: true,
        isFailed: false,
      };

    case types.REPOSITORIES_RECEIVED_SUCCESS:
      return {
        ...state,
        repositories: payload.repositories,
        totalCount: payload.totalCount,
        isLoading: false,
        isFailed: false,
      };

    case types.GET_REPOSITORIES_FAILED:
      return {
        ...state,
        isLoading: false,
        isFailed: true,
      };

    default:
      return state;
  }
};

export default searchRepositoriesReducer;
