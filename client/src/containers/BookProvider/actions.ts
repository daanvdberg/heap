/*
 *
 * Book provider actions
 *
 */

import { BookActionTypes, constants, BookData, BookType } from './types';

export const actions = {
	setBooks: (books: BookData[]): BookActionTypes => ({ type: constants.SET_BOOKS, payload: books }),
	searchBooks: (query: string, type: BookType): BookActionTypes => ({ type: constants.SEARCH_BOOKS, payload: { query, type } }),
	setResults: (books: BookData[]): BookActionTypes => ({ type: constants.SET_RESULTS, payload: books })
};