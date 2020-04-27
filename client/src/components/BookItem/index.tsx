import { Paper, Typography } from '@material-ui/core';
import React from 'react';
import { BookData } from '../../containers/BookProvider/types';
import BookCover from '../BookCover';

function BookItem({ book }: Props) {
	console.log(book);
	return (
		<Paper>
			<BookCover id={book.image} />
			<Typography variant='body2'>{book.title}</Typography>
			<Typography variant='caption'>{book.author}</Typography>
		</Paper>
	);
}

interface DirectProps {
	book: BookData
}

type Props = DirectProps

export default BookItem;