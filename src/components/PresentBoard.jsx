import React from 'react';
import {Link} from 'react-router-dom';

import '../styles/PresentBoard.css';

const PresentBoard = props => {
	const {children} = props;

	return (
		<div className='presentboard'>
			<Link to='/createBadge' className='create-btn btn btn-primary'>
				Create New Badge
			</Link>
			<div className='presentBoard__container'>{children}</div>
		</div>
	);
};

export default PresentBoard;
