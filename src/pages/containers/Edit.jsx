import React from 'react';
import {Link} from 'react-router-dom';

import PresentBoard from '../../components/PresentBoard';
import Card from '../../components/Card';
import Form from '../../components/Form';
import Modal from '../../components/Modal';

import loader from '../../images/loader.svg';

const Edit = props => {
	if (props.loading) {
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
						firstName={props.data.firstName || 'First_Name'}
						lastName={props.data.lastName || 'Last_Name'}
						email={props.data.email || ' '}
						jobTitle={props.data.jobTitle || 'Job_Title'}
						twitter={props.data.twitter || 'twitter'}
					/>
					<Form
						onChange={props.handleChange}
						onSubmit={props.handleSubmit}
						values={props.data}
						buttonTxt='Update'
					/>
				</div>
				<div className='edit__buttons'>
					<button onClick={props.toggleModal} className='btn btn-dangerous'>
						Delete
					</button>
					{props.isModalOpen && (
						<Modal close={props.toggleModal}>
							<h2>You are about to Delete This Badge , Are you Sure?</h2>
							<button onClick={props.toggleModal} className='btn btn-primary modal-btn'>
								Cancel
							</button>
							<button onClick={props.deleteBadge} className='btn btn-dangerous modal-btn'>
								Delete
							</button>
						</Modal>
					)}
				</div>
			</div>
		</PresentBoard>
	);
};

export default Edit;
