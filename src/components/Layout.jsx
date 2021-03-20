import React, {Component} from 'react';
import List from '../components/List';
import api from '../api';

class Layout extends Component {
	constructor(props) {
		super(props);

		this.state = {
			loading: true,
			error: null,
			data: [],
		};
	}

	componentDidMount() {
		this.fetchData();

		this.polling = setInterval(() => this.fetchData(), 5000);
	}

	componentWillUnmount() {
		clearInterval(this.polling);
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
		if (this.props.location.pathname === '/home') {
			return <div>{this.props.children}</div>;
		}
		return (
			<div className='dashboard__container'>
				<List data={this.state.data} loading={this.state.loading} />
				{this.props.children}
			</div>
		);
	}
}

export default Layout;
