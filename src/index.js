import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import App from './components/App';

import './assets/css/style.css';

import store from './store';

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.querySelector('.page__wrapper')
);
