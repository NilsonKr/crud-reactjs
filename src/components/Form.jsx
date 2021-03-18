import React from 'react';
import '../styles/Form.css';

const Form = () => {
	return (
		<form className='form__container'>
			<h2>Set your information</h2>
			<div className='firstName form--input'>
				<label> First Name </label>
				<input type='text' />
			</div>
			<div className='lastName form--input'>
				<label> Last Name </label>
				<input type='text' />
			</div>
			<div className='email form--input'>
				<label> E-mail </label>
				<input type='email' />
			</div>
			<div className='jobtitle form--input'>
				<label> Job Title </label>
				<input type='text' />
			</div>
			<div className='twitterInput form--input'>
				<label> Twitter </label>
				<input type='text' />
			</div>
			<button type='button' className='  btn btn-primary '>
				Send
			</button>
		</form>
	);
};

export default Form;
