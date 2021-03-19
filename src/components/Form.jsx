import React from 'react';
import '../styles/Form.css';

const Form = props => {
	return (
		<form className='form__container' onSubmit={props.onSubmit}>
			<h2>Set your information</h2>
			<div className='firstName form--input'>
				<label> First Name </label>
				<input
					type='text'
					name='firstName'
					onChange={props.onChange}
					value={props.values.firstName}
				/>
			</div>
			<div className='lastName form--input'>
				<label> Last Name </label>
				<input
					type='text'
					name='lastName'
					onChange={props.onChange}
					value={props.values.lastName}
				/>
			</div>
			<div className='email form--input'>
				<label> E-mail </label>
				<input
					type='email'
					name='email'
					onChange={props.onChange}
					value={props.values.email}
				/>
			</div>
			<div className='jobtitle form--input'>
				<label> Job Title </label>
				<input
					type='text'
					name='jobTitle'
					onChange={props.onChange}
					value={props.values.jobTitle}
				/>
			</div>
			<div className='twitterInput form--input'>
				<label> Twitter </label>
				<input
					type='text'
					name='twitter'
					onChange={props.onChange}
					value={props.values.twitter}
				/>
			</div>
			<button className='  btn btn-primary '>Send</button>
		</form>
	);
};

export default Form;
