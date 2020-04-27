
/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux';
import { StateType } from 'typesafe-actions';
import bookReducer from '../containers/BookProvider/reducer';

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
const reducers = combineReducers({
	books: bookReducer
});

export type RootState = StateType<typeof reducers>

export default reducers;