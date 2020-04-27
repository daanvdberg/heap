import { CssBaseline } from '@material-ui/core';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { ThemeProvider } from '@material-ui/core/styles';
import configureStore from './store/configure';
import App from './containers/App';
import theme from './theme';

// Import Font Awesome 5 icons
import { ICONS } from './icons';
console.log(ICONS);
library.add(...ICONS);

const store = configureStore()

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<ThemeProvider theme={theme}>
				<BrowserRouter>
					<CssBaseline />
					<App />
				</BrowserRouter>
			</ThemeProvider>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);
