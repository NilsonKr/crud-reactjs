import React from 'react';
import img from '../images/astronauts.svg';
import '../styles/Card.css';

const Card = props => {
	return (
		<div className='card'>
			<div className='card--details'>
				<img src={img} alt='Gravatar' />
				<h2>
					{props.values.firstName}
					<br />
					{props.values.lastName}
				</h2>
			</div>
			<div className='card-jobtitle'>
				<h2>{props.values.jobtitle}</h2>
			</div>
			<p className='twitter'>@{props.values.twitter}</p>
		</div>
	);
};

export default Card;
