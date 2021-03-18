import React, {Component} from 'react';
import Item from './Item';
import '../styles/List.css';

class List extends Component {
	render() {
		if (this.props.loading) {
			return <h2></h2>;
		}
		if (!this.props.data) {
			return <h2>Oh OH Something Came Out Wrong!❌😨</h2>;
		}

		return (
			<div className='list'>
				<h2 className='list--title'>BADGES</h2>
				<div className='list__container'>
					{this.props.data.map(badge => {
						return <Item key={badge.id} data={badge} />;
					})}
				</div>
			</div>
		);
	}
}

export default List;
