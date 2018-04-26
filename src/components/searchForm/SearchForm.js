import React, { Component } from 'react';
import './SearchForm.css';
import SearchInput from '../searchInput/SearchInput';
import SearchButton from '../searchButton/SearchButton';
import SearchResults from '../searchResults/SearchResults';

class SearchForm extends Component {
	constructor() {
		super()
		this.state = {
			searchInput: '',
			autocomplete: [],
			suggestions: [],
			isActive: ''
		}
	}

	componentDidMount() {
	}

	requestAPI = (searchInputValue) => {
		const urlSiteBase = 'http://agenciabluefoot.vtexcommercestable.com.br';
		/* Autocomplete */
			fetch(`${urlSiteBase}/buscaautocomplete/?productNameContains=${searchInputValue.toLowerCase()}`)
			.then(response => {
				return response.json();
			})
			.then(itemsReturned => {
				this.setState({ autocomplete: itemsReturned['itemsReturned'] })
			})
			.catch( errorFound =>  {
		        console.log(errorFound);
				this.setState({ autocomplete: [] });
		    });
		/* product */
			fetch(`${urlSiteBase}/api/catalog_system/pub/products/search/${searchInputValue.toLowerCase()}?map=ft&_from=1&_to=3`)
			.then(response => {
				return response.json();
			})
			.then(itemsReturned => {
				this.setState({ suggestions: itemsReturned })
			})
			.catch( errorFound =>  {
		        console.log(errorFound);
				this.setState({ suggestions: [] });
		    });
	}

	onSearchInputChange = (event) => {
		if (event.target.value.length > 1) {
			this.requestAPI(event.target.value);
			this.setState({ searchInput: event.target.value, isActive: true });
		} else {
			this.setState({ searchInput: '', autocomplete: [], suggestions: [], isActive: false });
		}
	}
	onBlur = () => {
		this.setState({ isActive: false });
	}

	render(){
		const { searchInput, autocomplete, suggestions, isActive } = this.state;

		const searchedAutocomplete = autocomplete.filter(autocompleteItem => {
			return autocompleteItem.name.toLowerCase().includes(searchInput.toLowerCase());
		});

		const searchedSuggestions = suggestions.filter(suggestionsItem => {
			return suggestionsItem.productName.toLowerCase().includes(searchInput.toLowerCase());
		});
		
		return (
			<div className='search'>
				<form className='search__form'>
					<SearchInput searchInputChange={ this.onSearchInputChange } onFocus= { this.onSearchInputChange } onBlur={ this.onBlur } />
					<SearchButton />
				</form>
				<SearchResults term={searchInput} autocomplete={ searchedAutocomplete } suggestions={ searchedSuggestions } isActive={ isActive } />
			</div>
		);
	}
}

export default SearchForm;