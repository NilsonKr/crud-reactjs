import React from 'react';

import img from '../images/astronauts.svg';
import '../styles/Item.css';

const Item = props => {
	return (
		<div className='item'>
			<div className='item__image'>
				<img src={props.data.avatarUrl} alt='Gravatar' />
			</div>
			<div className='item__details'>
				<h2 className='details--name'>
					{props.data.firstName} {props.data.lastName}
				</h2>
				<p className='details--job'>{props.data.jobTitle}</p>
				<a href='/' className='twitter'>
					@{props.data.twitter}
				</a>
			</div>
		</div>
	);
};

export default Item;
