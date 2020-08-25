import React from 'react';
import { Typography, Grid, Box, ButtonGroup, Button } from '@material-ui/core';
import { Rating } from '@material-ui/lab';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { BookData } from '../../containers/BookProvider/types';
import BookCover from '../BookCover';

const styles = makeStyles(
	createStyles({
		rating: {
			display: 'flex'
		}
	})
);

function BookItem({ book }: Props) {
	const c = styles();
	return (
		<Grid container spacing={2}>
			<Grid item xs='auto' style={{ width: 90 }}>
				<BookCover size='small' image={book.images} />
			</Grid>
			<Grid item xs>
				<Box pb={1}>
					<Typography variant='body2'>{book.title}</Typography>
					<Typography variant='caption'>by {book.author}</Typography>
				</Box>
				<Grid container alignItems='center'>
					<Box ml={-0.25} mt={-0.125}>
						<Rating name='rating' value={book.rating} readOnly size='small' className={c.rating} />
					</Box>
					<Box>&nbsp;&nbsp;<Typography variant='caption'>{book.rating || 0}</Typography></Box>
					<Box pl={1.25}>
						<Typography variant='caption'>
							—&nbsp;&nbsp;&nbsp;{book.ratingCount || 0} {book.ratingCount === 1 ? 'rating' : 'ratings'}
						</Typography>
					</Box>
				</Grid>
				<Box pt={1}>
					<ButtonGroup variant='contained' color='primary' size='small' aria-label='book action'>
						<Button>Want to Read</Button>
						<Button>
							<FontAwesomeIcon icon={['fas', 'caret-down']} fixedWidth />
						</Button>
					</ButtonGroup>
				</Box>
			</Grid>
		</Grid>
	);
}

interface DirectProps {
	book: BookData
}

type Props = DirectProps

export default BookItem;