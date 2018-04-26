import React from 'react';
import './SearchInput.css';


const SearchInput = ({ searchInput, searchInputChange, onFocus, onBlur }) => {
	return (
		<div>
			<input 
				className='search__input' 
				type='search' 
				placeholder='O que você deseja buscar?' 
				onChange={searchInputChange} 
				onFocus={ onFocus }
				onBlur={onBlur}
			/>
		</div>
	);
}

export default SearchInput;