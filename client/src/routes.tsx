import React from 'react';
import {
	Route,
	RouteProps as ReactRouteProps
} from 'react-router-dom';
import Home from './containers/Home';
import Books from './containers/Books';
import Memories from './containers/Memories';
import Records from './containers/Records';

export interface RouteProps extends ReactRouteProps {
	title?: string;
	routes?: RouteProps[]
}

type Props = RouteProps

const RouteWithSubRoutes = ({ path, component: Component, routes: childRoutes }: Props) => (
	<Route
		path={path}
		//@ts-ignore
		render={props => <Component {...props} routes={childRoutes} />}
	/>
);

const routes = {
	home: '/',
	books: '/books',
	booksQuery: '/books/:type/:query',
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
		path: [routes.booksQuery, routes.books],
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