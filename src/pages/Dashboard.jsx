import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import PresentBoard from '../components/PresentBoard';

import '../styles/Dashboard.css';

class Dashboard extends Component {
	render() {
		return (
			<React.Fragment>
				<PresentBoard>
					<Link to='/createBadge' className='create-btn btn btn-primary'>
						Create New Badge
					</Link>
				</PresentBoard>
			</React.Fragment>
		);
	}
}

export default Dashboard;
