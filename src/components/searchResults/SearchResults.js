import React from 'react';
import { Link } from 'react-router-dom';
import './SearchResults.css';
import ProductCard from '../productCard/ProductCard';

const SearchResults = ({ term, autocomplete, suggestions, isActive }) => {
	const formatTerm = (label, value) => {
		if (!value) {
			return label;
		}
		return (
			<span>
				{ label.split(value)
					.reduce((prev, current, i) => {
						if (!i) {
							return [current];
						}
						return prev.concat(<span className='search__term' key={value + current}>{ value }</span>, current);
					}, [])
				}
			</span>
		);
	};
	return (
		<div className={'search__results ' + (isActive ? 'active' : 'disabled') }>
			<div className={'autocomplete ' + (autocomplete.length ? 'active' : 'disabled') }>
					<p className='search__title'>Você quis dizer:</p>
					<ul className='search__list autocomplete__list'>
						{
							autocomplete.map((searched, i) => {
								return (
									<li key={i} className='autocomplete__item'>
										<Link to={`/produto/${searched.name}`}>
											{formatTerm(searched.name, term)}
										</Link>
									</li>
								);
							})
						}
					</ul>
			</div>
			<div className={'suggestion '+ (suggestions.length ? 'active' : 'disabled') }>
				<p className='search__title'>Produtos sugeridos:</p>
				<ul className='search__list suggestion__list'>
					{
						suggestions.map((searched, i) => {
							const imageID = searched.items[0].images[0].imageId;
							return (
								<li key={searched.productId} className='suggestion__item'>
									<ProductCard
										productID={searched.productId}
										linkText={searched.linkText}
										link={searched.link} 
										productName={searched.productName} 
										price={searched.items[0].sellers[0].commertialOffer.PriceWithoutDiscount} 
										imageUrl={searched.items[0].images[0].imageUrl}
										imageID={imageID}
										imgSize='150'
									/>
								</li>
							);
						})
					}
				</ul>
			</div>
		</div>
	);
}

export default SearchResults;