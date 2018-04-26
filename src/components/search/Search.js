import React, { Component } from 'react';
import './Search.css';
import SearchForm from '../searchForm/SearchForm';

class Search extends Component {
	render() {
		return (
			<div className='search'>
				<SearchForm />
			</div>
		);
	}
}

export default Search;