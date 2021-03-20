import React from 'react';

import Item from './Item';

import loader from '../images/loader.svg';
import '../styles/List.css';

function List(props) {
	const data = props.data;

	if (!data) {
		return <h2>Oh OH Something Came Out Wrong!❌😨</h2>;
	}
	return (
		<div className='list'>
			<h2 className='list--title'>BADGES</h2>
			<div className='list__container'>
				{data.map(badge => {
					return <Item key={badge.id} data={badge} />;
				})}
				{props.loading && <img src={loader} alt='Loader' />}
			</div>
		</div>
	);
}

export default List;
