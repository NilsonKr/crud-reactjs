import React from 'react';
import img from '../images/astronauts.svg';
import '../styles/Card.css';

const Card = props => {
	return (
		<div className='card'>
			<div className='card--details'>
				<img src={img} alt='Gravatar' />
				<h2>
					{props.firstName}
					<br />
					{props.lastName}
				</h2>
			</div>
			<div className='card-jobtitle'>
				<h2>{props.jobTitle}</h2>
			</div>
			<p className='twitter'>@{props.twitter}</p>
		</div>
	);
};

export default Card;
