import React from 'react';
import img from '../images/astronauts.svg';
import '../styles/Card.css';

const Card = () => {
	return (
		<div className='card'>
			<div className='card--details'>
				<img src={img} alt='Gravatar' />
				<h2>
					Nilson
					<br />
					Diaz
				</h2>
			</div>
			<div className='card-jobtitle'>
				<h2>Frotend Engineer</h2>
			</div>
			<p className='twitter'>@nilsonkr</p>
		</div>
	);
};

export default Card;
