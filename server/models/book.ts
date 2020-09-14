import * as mongoose from 'mongoose';
import { BookImage } from '../interfaces/Book';

const BookSchema = new mongoose.Schema({
	bookID: { type: String, required: true, unique: true },
	etag: { type: String, required: true, unique: true },
	title: { type: String, required: true, trim: true },
	subtitle: { type: String, trim: true },
	description: { type: String, trim: true },
	author: { type: String, required: true, trim: true },
	authors: { type: [String] },
	publisher: { type: String, trim: true },
	publishDate: { type: Date },
	pageCount: { type: Number },
	categories: { type: [String] },
	images: { type: [String] },
	rating: { type: Number, trim: true },
	ratingCount: { type: Number, trim: true },
});

interface IBook extends mongoose.Document {
	_id: string;
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

const Book = mongoose.model<IBook>('Book', BookSchema);

export default Book;