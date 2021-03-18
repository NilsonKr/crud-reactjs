import React from 'react';
import '../styles/PresentBoard.css';

const PresentBoard = props => {
	const {children} = props;

	return (
		<div className='presentboard'>
			<div className='presentBoard__container'>{children}</div>
		</div>
	);
};

export default PresentBoard;
