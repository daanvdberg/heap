import React from 'react';
import { Box, Divider, Grid, Typography } from '@material-ui/core';
import { BookData } from '../../containers/BookProvider/types';
import BookItem from '../BookItem';

function BookList({ books, query }: Props) {

	if (!books || books.length < 1) {
		return (
			<Typography variant='body2' color='textSecondary'>No results...</Typography>
		)
	}

	return (
		<Grid container direction='column'>
			<Typography gutterBottom variant='subtitle2'>
				{books.length} {books.length === 1 ? 'result' : 'results'} for "{query}".
			</Typography>
			<Divider />
			<Box pt={2} />
			<Grid container spacing={2}>
				{books.map((book) => <Grid key={book.bookID} item xs={12}><BookItem book={book} /></Grid>)}
			</Grid>
		</Grid>
	);
}

interface DirectProps {
	books: BookData[]
	query: string
}

type Props = DirectProps

export default BookList;