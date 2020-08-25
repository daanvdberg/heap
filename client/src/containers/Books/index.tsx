import React, { ComponentType, useEffect, useState, Fragment } from 'react';
import { connect } from 'react-redux';
import { compose, Dispatch } from 'redux';
import { createStructuredSelector } from 'reselect';
import {
	Box,
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
import { RouteComponentProps, withRouter } from 'react-router-dom';
import Toolbar from './components/Toolbar';

const styles = makeStyles(
	createStyles({
		formControl: {
			width: '100%'
		}
	})
);

function Books({ results, searchBooks, resetResults, match: { params }, history }: Props) {

	const c = styles();

	const { register, handleSubmit, setValue, watch } = useForm<BookQuery>();

	const query = watch('query');
	const [type, setType] = useState<BookType>(params.type || 'title');

	useEffect(() => {
		console.log(params);
		if (params.query) {
			console.log(params.query);
			setValue('query', params.query);
			setType(params.type);
			searchBooks(params.query, params.type || type);
		}
	}, []);

	useEffect(() => {
		if (params.query) {
			console.log(params.query);
			searchBooks(params.query, params.type || type);
		}
		return () => resetResults()
	}, [params]);

	const handleChangeType = (event: React.ChangeEvent<{ value: unknown }>) => {
		setType(event.target.value as BookType);
	};

	const onSubmit = (data: BookQuery) => history.push(`/books/${type}/${encodeURIComponent(data.query)}`);

	return (
		<Fragment>

			<Toolbar />

			<Box p={2} pb={8}>
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

				<Box py={3}>
					<BookList books={results} query={query} />
				</Box>

			</Box>

		</Fragment>
	);
}

interface StateFromProps {
	results: BookData[]
}

interface DispatchFromProps {
	searchBooks: (query: string, type: BookType) => void
	resetResults: () => void
}

type Props = StateFromProps & DispatchFromProps & RouteComponentProps<BookQuery>

const mapStateToProps = createStructuredSelector<RootState, StateFromProps>({
	results: makeSelectSearchResults()
});

function mapDispatchToProps(dispatch: Dispatch): DispatchFromProps {
	return {
		searchBooks: (query, type) => dispatch(BookActions.searchBooks(query, type)),
		resetResults: () => dispatch(BookActions.setResults([]))
	};
}

const withConnect = connect(
	mapStateToProps,
	mapDispatchToProps
);

export default withRouter(withConnect(Books) as ComponentType<any>);