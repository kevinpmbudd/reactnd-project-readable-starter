import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import "./semantic-dist/semantic.min.css";
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './reducers'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
	reducer,
	composeEnhancers(
		applyMiddleware(thunk)
	)
)

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter><App /></BrowserRouter>
	</Provider>, 
	document.getElementById('root')
)
registerServiceWorker()