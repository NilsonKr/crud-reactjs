import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import api from '../api';

import PresentBoard from '../components/PresentBoard';
import Card from '../components/Card';
import Form from '../components/Form';

import loader from '../images/loader.svg';

class Create extends Component {
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
		this.setState({loading: true, error: null});

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
		if (this.state.loading) {
			return (
				<PresentBoard>
					<img src={loader} alt='Loader' />
				</PresentBoard>
			);
		}

		return (
			<React.Fragment>
				<PresentBoard>
					<Link to='/' className='create-btn btn btn-primary'>
						Back To DashBoard
					</Link>
					<Card
						firstName={this.state.form.firstName || 'First_Name'}
						lastName={this.state.form.lastName || 'Last_Name'}
						jobTitle={this.state.form.jobTitle || 'Job_Title'}
						twitter={this.state.form.twitter || 'twitter'}
					/>
					<Form
						onChange={this.handleChange}
						onSubmit={this.handleSubmit}
						values={this.state.form}
					/>
				</PresentBoard>
			</React.Fragment>
		);
	}
}

export default Create;
