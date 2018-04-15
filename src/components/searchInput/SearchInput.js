import React from 'react';
import './SearchInput.css';

const SearchInput = () => {
	return (
		<div>
			<input 
				className='search__input' 
				type='search' 
				placeholder='O que você deseja buscar?' 
			/>
		</div>
	);
}

export default SearchInput;