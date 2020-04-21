import { combineReducers } from 'redux';

import searchRepositoriesReducer from './repositories/reducer';

const rootReducer = combineReducers({ searchRepositoriesReducer });

export default rootReducer;
