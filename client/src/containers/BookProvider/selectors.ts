import { createSelector, Selector } from 'reselect';
import { RootState } from '../../store/reducers';
import { initialState } from './reducer';
import {
	BookData,
	BookState
} from './types';

/**
 * Direct selector to the book state domain
 */

const selectBookDomain: Selector<RootState, BookState> = (state) => state.books || initialState;

/**
 * Other specific selectors
 */
const BookSelectors: [Selector<RootState, BookState>] = [selectBookDomain];
const makeSelectMyBooks = () =>
	createSelector<RootState, BookState, BookData[]>(
		BookSelectors,
		(subState) => subState.books
	);

const SearchResultSelectors: [Selector<RootState, BookState>] = [selectBookDomain];
const makeSelectSearchResults = () =>
	createSelector<RootState, BookState, BookData[]>(
		SearchResultSelectors,
		(subState) => subState.results
	);

/**
 * Default selector used by the books provider
 */
const makeSelectBooks = () =>
	createSelector(
		selectBookDomain,
		(subState) => subState
	);

export default makeSelectBooks;
export {
	selectBookDomain,
	makeSelectMyBooks,
	makeSelectSearchResults
};