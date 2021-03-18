import React, {Component} from 'react';
import api from '../api';

import List from '../components/List';
import PresentBoard from '../components/PresentBoard';

import '../styles/Dashboard.css';

class Dashboard extends Component {
	constructor(props) {
		super(props);

		this.state = {
			loading: true,
			error: null,
			data: undefined,
		};
	}

	componentDidMount() {
		this.fetchData();
	}

	fetchData = async () => {
		this.setState({loading: true, error: null});

		try {
			const data = await api.badges.list();
			this.setState({loading: false, data});
		} catch (error) {
			this.setState({loading: false, error});
		}
	};

	render() {
		return (
			<React.Fragment>
				<List data={this.state.data} loading={this.state.loading} />
				<PresentBoard></PresentBoard>
			</React.Fragment>
		);
	}
}

export default Dashboard;
