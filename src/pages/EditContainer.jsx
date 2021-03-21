import React, {Component} from 'react';
import api from '../api';
import md5 from 'md5';

import Edit from './containers/Edit';

import '../styles/Edit.css';

class EditContainer extends Component {
	constructor(props) {
		super(props);

		this.id = props.match.params.badgeId;

		this.state = {
			isModalOpen: false,
			loading: true,
			error: null,
			data: {
				firstName: '',
				lastName: '',
				email: '',
				jobTitle: '',
				twitter: '',
				avatarUrl: '',
			},
		};
	}

	componentDidMount = async () => {
		this.updateBadge();
	};

	componentDidUpdate(prevProps) {
		if (prevProps !== this.props) {
			this.id = this.props.match.params.badgeId;
			this.updateBadge();
		}
	}

	toggleModal = ev => {
		const toggle = this.state.isModalOpen ? false : true;

		this.setState({isModalOpen: toggle});
	};

	deleteBadge = async ev => {
		this.setState({loading: true, error: null});

		try {
			await api.badges.remove(this.id);
			this.props.history.push('/');

			this.setState({loading: false});
		} catch (error) {
			this.setState({loading: false, error});
		}
	};

	updateBadge = async () => {
		this.setState({loading: true, error: null});

		try {
			const data = await api.badges.read(this.id);

			this.setState({loading: false, data});
		} catch (error) {
			this.setState({loading: false, error});
		}
	};

	handleChange = ev => {
		this.setState({
			data: {
				...this.state.data,
				[ev.target.name]: ev.target.value,
			},
		});
	};

	handleSubmit = async ev => {
		ev.preventDefault();
		const gravatar = `https://www.gravatar.com/avatar/${md5(
			this.state.data.email
		)}?d=identicon`;

		await this.setState({
			data: {
				...this.state.data,
				avatarUrl: gravatar,
			},
		});

		this.setState({loading: true, error: null});
		try {
			await api.badges.update(this.id, this.state.data);
			this.updateBadge();
		} catch (error) {
			this.setState({loading: false, error});
		}
	};

	render() {
		return (
			<Edit
				loading={this.state.loading}
				data={this.state.data}
				handleChange={this.handleChange}
				handleSubmit={this.handleSubmit}
				isModalOpen={this.state.isModalOpen}
				toggleModal={this.toggleModal}
				deleteBadge={this.deleteBadge}
			/>
		);
	}
}

export default EditContainer;
