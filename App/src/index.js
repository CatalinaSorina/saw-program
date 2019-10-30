import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import 'antd/dist/antd.css';
import { BrowserRouter as Router, withRouter } from 'react-router-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

const AppWithRouter = withRouter(App);

ReactDOM.render(
	<Router>
		<AppWithRouter />
	</Router>,
	document.getElementById('root')
);

serviceWorker.unregister();
