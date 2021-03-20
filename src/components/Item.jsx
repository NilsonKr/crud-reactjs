import React from 'react';
import {Link} from 'react-router-dom';

import '../styles/Item.css';

const Item = props => {
	return (
		<Link to={`/edit/${props.data.id}`} className='item'>
			<div className='item__image'>
				<img src={props.data.avatarUrl} alt='Gravatar' />
			</div>
			<div className='item__details'>
				<h2 className='details--name'>
					{props.data.firstName} {props.data.lastName}
				</h2>
				<p className='details--job'>{props.data.jobTitle}</p>
				<p className='twitter'>@{props.data.twitter}</p>
			</div>
		</Link>
	);
};

export default Item;
