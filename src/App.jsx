import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Create from './pages/Create';
import Edit from './pages/Edit';

const App = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Layout>
					<Route exact path='/' component={Dashboard} />
					<Route exact path='/createBadge' component={Create} />
					<Route exact path='/edit/:badgeId' component={Edit} />
				</Layout>
			</Switch>
		</BrowserRouter>
	);
};

export default App;
