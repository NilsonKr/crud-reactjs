import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import EditContainer from './pages/EditContainer';
import CreateContainer from './pages/CreateContainer';

const App = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Layout>
					<Route exact path='/' component={Dashboard} />
					<Route exact path='/createBadge' component={CreateContainer} />
					<Route exact path='/edit/:badgeId' component={EditContainer} />
				</Layout>
			</Switch>
		</BrowserRouter>
	);
};

export default App;
