import { combineReducers } from 'redux';

import searchRepositoriesReducer from './searchRepositoriesReducer';

export const rootReducer = combineReducers({ searchRepositoriesReducer });
