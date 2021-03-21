import React, {Component} from 'react';
import api from '../api';
import md5 from 'md5';

import Create from './containers/Create';

class CreateContainer extends Component {
	constructor(props) {
		super(props);

		this.state = {
			loading: false,
			error: false,
			form: {
				firstName: '',
				lastName: '',
				email: '',
				jobTitle: '',
				twitter: '',
			},
		};
	}

	handleChange = ev => {
		const target = ev.target;

		this.setState({
			form: {
				...this.state.form,
				[target.name]: target.value,
			},
		});
	};

	handleSubmit = async ev => {
		ev.preventDefault();
		const avatarurl = `https://www.gravatar.com/avatar/${md5(
			this.state.form.email
		)}?d=identicon`;

		await this.setState({
			loading: true,
			error: null,
			form: {
				...this.state.form,
				avatarUrl: avatarurl,
			},
		});

		try {
			await api.badges.create(this.state.form);

			this.setState({
				loading: false,
				error: null,
				form: {
					firstName: '',
					lastName: '',
					email: '',
					jobTitle: '',
					twitter: '',
				},
			});
		} catch (error) {
			this.setState({loading: false, error});
		}
	};

	render() {
		return (
			<Create
				form={this.state.form}
				handleChange={this.handleChange}
				handleSubmit={this.handleSubmit}
				loading={this.state.loading}
			/>
		);
	}
}

export default CreateContainer;
