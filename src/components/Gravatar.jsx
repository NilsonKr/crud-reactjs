import React from 'react';
import md5 from 'md5';

const Gravatar = ({email}) => {
	// const url = md5(email);

	return (
		<img
			src={`https://www.gravatar.com/avatar/${md5(email)}?d=identicon`}
			alt='Gravatar'
		/>
	);
};

export default Gravatar;
