import React, {Component} from 'react';

import PresentBoard from '../components/PresentBoard';

import '../styles/Dashboard.css';

class Dashboard extends Component {
	render() {
		return (
			<React.Fragment>
				<PresentBoard></PresentBoard>
			</React.Fragment>
		);
	}
}

export default Dashboard;
