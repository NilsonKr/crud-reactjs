import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import api from '../api';
import md5 from 'md5';

import PresentBoard from '../components/PresentBoard';
import Card from '../components/Card';
import Form from '../components/Form';

import '../styles/Edit.css';
import loader from '../images/loader.svg';

class Edit extends Component {
	constructor(props) {
		super(props);

		this.id = props.match.params.badgeId;

		this.state = {
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
		if (this.state.loading) {
			return (
				<PresentBoard>
					<Link to='/' className='back-btn btn btn-primary'>
						Back To DashBoard
					</Link>
					<img src={loader} alt='Loader' />
				</PresentBoard>
			);
		}

		return (
			<PresentBoard>
				<Link to='/' className='back-btn btn btn-primary'>
					Back To DashBoard
				</Link>
				<div className='edit__container'>
					<div className='presentBoard__container '>
						<Card
							firstName={this.state.data.firstName || 'First_Name'}
							lastName={this.state.data.lastName || 'Last_Name'}
							email={this.state.data.email || ' '}
							jobTitle={this.state.data.jobTitle || 'Job_Title'}
							twitter={this.state.data.twitter || 'twitter'}
						/>
						<Form
							onChange={this.handleChange}
							onSubmit={this.handleSubmit}
							values={this.state.data}
							buttonTxt='Update'
						/>
					</div>
					<div className='edit__buttons'>
						<button className='btn btn-dangerous'>Delete</button>
					</div>
				</div>
			</PresentBoard>
		);
	}
}

export default Edit;
