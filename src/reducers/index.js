/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux';

import pageReducer from './page';

export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    page: pageReducer,
    ...injectedReducers,
  });

  return rootReducer;
}
