import React from 'react';
import {Link} from 'react-router-dom';

import PresentBoard from '../../components/PresentBoard';
import Card from '../../components/Card';
import Form from '../../components/Form';

import loader from '../../images/loader.svg';

const Create = props => {
	if (props.loading) {
		return (
			<PresentBoard>
				<img src={loader} alt='Loader' />
			</PresentBoard>
		);
	}
	return (
		<React.Fragment>
			<PresentBoard>
				<Link to='/' className='back-btn btn btn-primary'>
					Back To DashBoard
				</Link>
				<Card
					firstName={props.form.firstName || 'First_Name'}
					lastName={props.form.lastName || 'Last_Name'}
					email={props.form.email || ' '}
					jobTitle={props.form.jobTitle || 'Job_Title'}
					twitter={props.form.twitter || 'twitter'}
				/>
				<Form
					onChange={props.handleChange}
					onSubmit={props.handleSubmit}
					values={props.form}
				/>
			</PresentBoard>
		</React.Fragment>
	);
};

export default Create;
