import React from 'react';
import ReactDOM from 'react-dom';

import '../styles/Modal.css';

const Modal = props => {
	return ReactDOM.createPortal(
		<div className='Modal'>
			<div className='Modal__container'>
				<button onClick={props.close} className='Modal__close-button'>
					X
				</button>
				{props.children}
			</div>
		</div>,
		document.querySelector('#modal')
	);
};

export default Modal;
