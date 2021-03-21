import React, {useState, useMemo} from 'react';

import Item from './Item';
import SearchBar from './SearchBar';

import loader from '../images/loader.svg';

const useSearch = data => {
	const [query, setQuery] = useState('');
	const [filteredData, setFilteredData] = useState(data);

	useMemo(() => {
		const results = data.filter(badge => {
			return `${badge.firstName} ${badge.lastName}`
				.toLowerCase()
				.includes(query.toLocaleLowerCase());
		});

		if (results.length !== filteredData.length) {
			setFilteredData(results);
		}
	}, [query, filteredData]);

	return [query, setQuery, filteredData];
};

function List(props) {
	const data = props.data;

	if (data.length === 0) {
		return (
			<div className='list'>
				<div className='list__container'>
					<img src={loader} alt='Loader' />
				</div>
			</div>
		);
	}

	const [query, setQuery, filteredData] = useSearch(data);

	if (filteredData.length === 0) {
		return (
			<div className='list'>
				<SearchBar query={query} setQuery={setQuery} />
				<div className='list__container'>
					<h2>Oh OH Something Came Out Wrong!❌😨</h2>
				</div>
			</div>
		);
	}
	return (
		<div className='list'>
			<SearchBar query={query} setQuery={setQuery} />
			<div className='list__container'>
				{filteredData.map(badge => {
					return <Item key={badge.id} data={badge} />;
				})}
				{props.loading && <img src={loader} alt='Loader' />}
			</div>
		</div>
	);
}

export default List;
