export interface IBook {
	_id: string;
	key: string;
	title: string;
	author: string;
	image: string;
	description: string;
	pageCount: number;
	published: Date;
	isbn: string;
}

export type BookImage = {
	smallThumbnail?: string;
	thumbnail?: string;
	largeThumbnail?: string
}
