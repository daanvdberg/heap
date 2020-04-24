import { Route } from "react-router-dom";
import Books from './containers/Books';
import Memories from './containers/Memories';
import Records from './containers/Records';

export const RouteWithSubRoutes = (route) => <Route
	path={route.path}
	render={props => (
		// pass the sub-routes down to keep nesting
		<route.component {...props} routes={route.routes} />
	)}
/>;

export default [
	{
		path: '/books',
		component: Books
	},
	{
		path: '/records',
		component: Records
		// routes: [
		// 	{
		// 		path: "/records/search",
		// 		component: ...
		// 	}
		// ]
	},
	{
		path: '/memories',
		component: Memories
	}
];