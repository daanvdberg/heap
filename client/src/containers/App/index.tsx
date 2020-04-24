import React, { useEffect, useState } from 'react';
import { Box, Switch } from '@material-ui/core';
import routes, { RouteWithSubRoutes } from '../../routes';
import Navigation from './components/Navigation';

function App() {

	const [data, setData] = useState('');

	useEffect(() => {
		callBackendAPI()
			.then(res => setData(res.express ))
			.catch(err => console.log(err));
	}, []);

	const callBackendAPI = async () => {
		const response = await fetch('/express_backend');
		const body = await response.json();

		if (response.status !== 200) {
			throw Error(body.message)
		}
		return body;
	};

	return (
		<Box>
			Heap
			<p className="App-intro">{data}</p>

			<Switch>
				{routes.map((route, i) => (
					<RouteWithSubRoutes key={i} {...route} />
				))}
			</Switch>

			<Navigation />
		</Box>
	);
}

export default App;
