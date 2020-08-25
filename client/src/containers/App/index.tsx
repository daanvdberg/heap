import React from 'react';
import { Box } from '@material-ui/core';
import { Switch } from 'react-router-dom';
import routeConfig, { RouteWithSubRoutes } from '../../routes';
import Navigation from './components/Navigation';

function App() {
	return (
		<Box>
			<Switch>
				{routeConfig.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
			</Switch>
			<Navigation />
		</Box>
	);
}

export default App;
