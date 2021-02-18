import React from 'react';

const Search = () => {
	const onSearchSubmit = e => {
		e.preventDefault();
	};

	return (
		<form className='main__search search' onSubmit={onSearchSubmit}>
			<input className='search__input' type='text' name='search' placeholder='Quick find' autoComplete='off' />
			<i class='search__sign fas fa-search'></i>
		</form>
	);
};

export default Search;
