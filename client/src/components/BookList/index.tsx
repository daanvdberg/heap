import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { BookData } from '../../containers/BookProvider/types';
import BookItem from '../BookItem';

function BookList({ books }: Props) {

	if (!books || books.length < 1) {
		return (
			<Typography variant='body2' color='textSecondary'>No results...</Typography>
		)
	}

	return (
		<Grid container spacing={2}>
			{books.map((book) => <Grid key={book.id} item xs={6}><BookItem book={book} /></Grid>)}
		</Grid>
	);
}

interface DirectProps {
	books: BookData[]
}

type Props = DirectProps

export default BookList;