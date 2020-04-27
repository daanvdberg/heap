import React from 'react';
import {
	Route,
	RouteComponentProps,
	RouteProps as ReactRouteProps
} from 'react-router-dom';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Home from './containers/Home';
import Books from './containers/Books';
import Memories from './containers/Memories';
import Records from './containers/Records';

const styles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			flexGrow: 1
		},
		menuButton: {
			marginRight: theme.spacing(2)
		},
		title: {
			flexGrow: 1
		}
	})
);

export interface RouteProps extends ReactRouteProps {
	title?: string;
	routes?: RouteProps[]
}

type Props = RouteProps

const RouteWithSubRoutes = ({ path, title, component: Component, routes: childRoutes }: Props) => (
	<Route
		path={path}
		//@ts-ignore
		render={props => <Component {...props} routes={childRoutes} />}
	/>
);

const routes = {
	home: '/',
	books: '/books',
	records: '/records',
	memories: '/memories'
}

const routeConfig: RouteProps[] = [
	{
		path: routes.home,
		exact: true,
		component: Home
	},
	{
		path: routes.books,
		title: 'Books',
		component: Books
	},
	{
		path: routes.records,
		title: 'Records',
		component: Records
		// routes: [
		// 	{
		// 		path: "/records/search",
		// 		component: ...
		// 	}
		// ]
	},
	{
		path: routes.memories,
		title: 'Memories',
		component: Memories
	}
];

export { routes, RouteWithSubRoutes };
export default routeConfig;