import React, {Component} from 'react';
import List from '../components/List';
import PresentBoard from '../components/PresentBoard';
import Card from '../components/Card';
import Form from '../components/Form';
import '../styles/Dashboard.css';

export class Dashboard extends Component {
	render() {
		return (
			<div className='dashboard__container'>
				<List />
				<PresentBoard>
					<Card />
					<Form />
				</PresentBoard>
			</div>
		);
	}
}

export default Dashboard;
