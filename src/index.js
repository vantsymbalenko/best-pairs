import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './containers/App';
import configStore from './store/configStore';

const store = configStore();

ReactDOM.render(
	<Provider store = {store}>
		<App />
	</Provider>, document.getElementById('root'));
