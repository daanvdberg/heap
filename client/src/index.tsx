import { CssBaseline } from '@material-ui/core';
import React from 'react';
import ReactDOM from 'react-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { ThemeProvider } from '@material-ui/core/styles';
import App from './containers/App';
import theme from './theme';

// Import Font Awesome 5 icons
import { ICONS } from './icons';
console.log(ICONS);
library.add(...ICONS);

ReactDOM.render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<Router>
				<CssBaseline />
				<App />
			</Router>
		</ThemeProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
