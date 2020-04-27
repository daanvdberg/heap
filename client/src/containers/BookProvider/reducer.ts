/*
 *
 * Directory reducer
 *
 */
import produce from 'immer';
import { BookActionTypes, constants, BookState, BookData } from './types';

export const initialState: BookState = {
	books: [],
	results: []
};

/* eslint-disable default-case, no-param-reassign */
const bookReducer = (state = initialState, action: BookActionTypes): BookState =>
	produce(state, (draft) => {
		switch (action.type) {
			case constants.SET_BOOKS:
				draft.books = action.payload as BookData[];
				break;

			case constants.SET_RESULTS:
				draft.results = action.payload as BookData[];
				break;
		}
	});

export default bookReducer;