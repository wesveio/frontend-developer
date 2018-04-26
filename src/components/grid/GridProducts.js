import React, { Component } from 'react';
import './GridProducts.css';
import ProductCard from '../productCard/ProductCard';

class GridProduct extends Component {
	constructor() {
		super()
		this.state = {
			products: []
		}
	}

	componentDidMount() {
		const urlSiteBase = 'https://www.fnac.com.br/';
		fetch(`${urlSiteBase}/api/catalog_system/pub/products/search/comics?map=ft&_from=1&_to=15`)
			.then(response => {
				return response.json();
			})
			.then(itemsReturned => {
				this.setState({ products: itemsReturned })
			})
			.catch( errorFound =>  {
		        console.log(errorFound);
				this.setState({ products: [] });
		    });
	}


	render(){
		const { products } = this.state;
		
		return (
			<div className={'gridProducts '+ (products.length ? 'active' : 'disabled') }>
				<h2 className='grid__title'>Simplesmente Comics</h2>
				<ul className='grid__list'>
					{
						products.map((searched, i) => {
							const imageID = searched.items[0].images[0].imageId;
							return (
								<li key={searched.productId} className='grid__item'>
									<ProductCard
										productID={searched.productId}
										linkText={searched.linkText}
										link={searched.link} 
										productName={searched.productName} 
										price={searched.items[0].sellers[0].commertialOffer.PriceWithoutDiscount} 
										imageUrl={searched.items[0].images[0].imageUrl}
										imageID={imageID} 
										imgSize='400'
									/>
								</li>
							);
						})
					}
				</ul>
			</div>
		);
	}
}

export default GridProduct;