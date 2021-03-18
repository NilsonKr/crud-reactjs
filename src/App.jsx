import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Create from './pages/Create';

const App = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Layout>
					<Route exact path='/' component={Dashboard} />
					<Route exact path='/createBadge' component={Create} />
				</Layout>
			</Switch>
		</BrowserRouter>
	);
};

export default App;
