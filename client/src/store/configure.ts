import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import createReducer from './reducers';
import bookSaga from '../containers/BookProvider/saga';

export default (initialState = {}) => {
	let composeEnhancers = compose;
	const reduxSagaMonitorOptions = {};

	if (process.env.NODE_ENV !== 'production' && typeof window === 'object') {
		/* eslint-disable no-underscore-dangle */
		if (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
			composeEnhancers = window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ shouldHotReload: false });
	}

	const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions);

	// Create the store with two middlewares
	// 1. sagaMiddleware: Makes redux-sagas work
	// 2. routerMiddleware: Syncs the location/URL path to the state
	let middlewares = [];
	if (process.env.NODE_ENV !== 'production') {
		const logger = createLogger({ collapsed: true });
		middlewares = [sagaMiddleware, logger];
	} else {
		middlewares = [sagaMiddleware];
	}

	const enhancers = [applyMiddleware(...middlewares)];

	const store = createStore(
		createReducer,
		initialState,
		composeEnhancers(...enhancers)
	);

	sagaMiddleware.run(bookSaga);

	if (process.env.NODE_ENV !== 'production') {
		if (module.hot) {
			module.hot.accept('./reducers', () => {
				store.replaceReducer(createReducer);
			});
		}
	}

	return store;
}