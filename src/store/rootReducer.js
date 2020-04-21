import { combineReducers } from 'redux';

import searchRepositoriesReducer from './repositories/reducer';

const rootReducer = combineReducers({ searchRepositories: searchRepositoriesReducer });

export default rootReducer;
