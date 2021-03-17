import React from 'react';
import img from '../images/astronauts.svg';
import '../styles/Item.css';

const Item = () => {
	return (
		<div className='item'>
			<img className='item__image' src={img} alt='Gravatar' />
			<div className='item__details'>
				<h2 className='details--name'>Nilson Diaz</h2>
				<p className='details--job'>Front-end Dev</p>
				<a href='/' className='twitter'>
					@nilsonkr
				</a>
			</div>
		</div>
	);
};

export default Item;
