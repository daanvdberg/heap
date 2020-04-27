import React, { useState } from 'react';
import { connect } from 'react-redux';
import { compose, Dispatch } from 'redux';
import { createStructuredSelector } from 'reselect';
import {
	Box,
	Paper,
	TextField,
	Typography,
	Grid,
	FormControl,
	InputLabel,
	Select, MenuItem
} from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { useForm } from 'react-hook-form';
import BookList from '../../components/BookList';
import { RootState } from '../../store/reducers';
import { actions as BookActions } from '../BookProvider/actions';
import { makeSelectSearchResults } from '../BookProvider/selectors';
import { BookData, BookQuery, BookType } from '../BookProvider/types';

const styles = makeStyles(
	createStyles({
		formControl: {
			width: '100%'
		}
	})
);

function Books({ results, searchBooks }: Props) {

	const c = styles();

	const { register, handleSubmit, errors } = useForm<BookQuery>();
	const [type, setType] = useState<BookType>('title');

	const handleChangeType = (event: React.ChangeEvent<{ value: unknown }>) => {
		setType(event.target.value as BookType);
	};

	const onSubmit = (data: BookQuery) => searchBooks(data.query, type);

	return (
		<Box p={3}>
			<Typography variant='h2' gutterBottom>Books</Typography>
			<Paper elevation={3}>
				<Box p={1}>
					<form noValidate autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
						<Grid container spacing={2}>
							<Grid item xs={8}>
								<TextField className={c.formControl} name='query' label='Search' variant='filled'
								           size='small'
								           inputRef={register} />
							</Grid>
							<Grid item xs={4}>
								<FormControl className={c.formControl}>
									<InputLabel id='type-label'>Type</InputLabel>
									<Select
										id='searchType'
										labelId='type-label'
										value={type}
										onChange={handleChangeType}
									>
										<MenuItem value='title'>Title</MenuItem>
										<MenuItem value='author'>Author</MenuItem>
									</Select>
								</FormControl>
							</Grid>
						</Grid>
					</form>
				</Box>
			</Paper>

			<Box py={3}>
				<BookList books={results} />
			</Box>

		</Box>
	);
}

interface StateFromProps {
	results: BookData[]
}

interface DispatchFromProps {
	searchBooks: (query: string, type: BookType) => void
}

type Props = StateFromProps & DispatchFromProps

const mapStateToProps = createStructuredSelector<RootState, StateFromProps>({
	results: makeSelectSearchResults()
});

function mapDispatchToProps(dispatch: Dispatch): DispatchFromProps {
	return {
		searchBooks: (query, type) => dispatch(BookActions.searchBooks(query, type))
	};
}

const withConnect = connect(
	mapStateToProps,
	mapDispatchToProps
);

export default compose(
	withConnect
)(Books);