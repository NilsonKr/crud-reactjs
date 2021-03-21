import React from 'react';

const SearchBar = ({query, setQuery}) => {
	return (
		<input
			className='list--searchBar'
			type='text'
			placeholder='Search a Badge'
			value={query}
			onChange={ev => setQuery(ev.target.value)}
		/>
	);
};

export default SearchBar;
