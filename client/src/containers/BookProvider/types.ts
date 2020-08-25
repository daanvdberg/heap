const base = 'BOOK';

// Interfaces for individual parts of the store state object
export type BookType = 'title' | 'author';
export interface BookQuery { query: string, type: BookType }

export type BookImage = {
	smallThumbnail?: string;
	thumbnail?: string;
	largeThumbnail?: string
}

export interface BookData {
	_id?: string;
	bookID: string;
	etag: string;
	title: string;
	subtitle: string;
	description: string;
	author: string;
	authors: string[];
	publisher: string;
	publishDate: Date;
	pageCount: number;
	categories: string[];
	images: BookImage;
	rating: number;
	ratingCount: number;
}

// Interface for store state object
export interface BookState {
	books: BookData[],
	results: BookData[]
}

// Action constants
export const constants = {
	SET_BOOKS: `${base}/BOOKS/SET`,
	SEARCH_BOOKS: `${base}/SEARCH/QUERY`,
	SET_RESULTS: `${base}/SEARCH/SET`
};

// Individual actions
interface SetBooks {
	type: typeof constants.SET_BOOKS
	payload: BookData[]
}

export interface SearchBooks {
	type: typeof constants.SEARCH_BOOKS
	payload: BookQuery
}

interface SetResults {
	type: typeof constants.SET_RESULTS
	payload: BookData[]
}

// Combined type for reducer - use pipe to combine
export type BookActionTypes = SetBooks | SearchBooks | SetResults