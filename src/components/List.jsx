import React, {Component} from 'react';
import Item from './Item';
import '../styles/List.css';

export class List extends Component {
	render() {
		return (
			<div className='list'>
				<h2 className='list--title'>BADGES</h2>
				<div className='list__container'>
					<Item />
					<Item />
					<Item />
					<Item />
					<Item />
					<Item />
					<Item />
					<Item />
					<Item />
					<Item />
					<Item />
					<Item />
					<Item />
					<Item />
					<Item />
					<Item />
				</div>
			</div>
		);
	}
}

export default List;
