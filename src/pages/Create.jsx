import React, {Component} from 'react';

import PresentBoard from '../components/PresentBoard';
import Card from '../components/Card';
import Form from '../components/Form';

class Create extends Component {
	constructor(props) {
		super(props);

		this.state = {
			form: {
				firstName: '',
				lastName: '',
				email: '',
				jobtitle: '',
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

	render() {
		return (
			<React.Fragment>
				<PresentBoard>
					<Card values={this.state.form} />
					<Form onChange={this.handleChange} />
				</PresentBoard>
			</React.Fragment>
		);
	}
}

export default Create;
