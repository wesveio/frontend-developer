import React, { Component } from 'react';
import './Product.css';

class Product extends Component {
	constructor() {
		super()
		this.state = {
			id: '',
			statekey: '',
			product: []
		}
	}

	componentWillUnmount() {
		console.log('UNMOUNT');
		this.setState({
			id: '',
			statekey: '',
			product: []
		})
	}

	shouldComponentUpdate(nextProps, nextState) {
	    if (nextProps.location.key !== this.state.statekey ) {
			return true;
	    } else {
	    	return false;
	    }
	}

	componentDidUpdate() {
		this.requestAPI(this.props.match.params.productID);
	}

	componentDidMount() {
		this.requestAPI(this.props.match.params.productID);
	}

	requestAPI = () => {
		// console.log(this);
		const urlSiteBase = '//agenciabluefoot.vtexcommercestable.com.br';
		if (this.props.location.key !== this.state.statekey) {
			/* product */
				fetch(`${urlSiteBase}/api/catalog_system/pub/products/search/?fq=productId:${this.props.match.params.productID}`)
				.then(response => {
					return response.json();
				})
				.then(itemsReturned => {
					this.setState({
						id: this.props.match.params.productID,
						statekey: this.props.location.key,
						product: itemsReturned[0]
					})
				})
				.catch( errorFound =>  {
					this.setState({
						id: '',
						statekey: '',
						product: []
					})
			    });

		}
	}

	render(){
		const { product } = this.state;
		console.log(product);
		if (product.length === 0) {
			return <h1>Carregando...</h1>;
		} else {
			return (
				<article className='product' itemscope itemtype='http://schema.org/Product'>
					<div className='container'>
						
						<div className='row'>
							<div className='col-sm-6'>
								<div className='product__image'>
									<img itemprop='image' className='img-fluid' src={product.items[0].images[0].imageUrl.replace(product.items[0].images.imageId, product.items[0].images.imageId+'-1000-1000')} alt={product.items[0].images.imageText} />
								</div>
							</div>
							<div className='col-sm-6'>
								<h1 itemprop='name' className='product__title'>{product.productName}</h1>
								<span className="badge badge-success availability" itemprop="availability">Disponível</span>
								<div className="offer" itemscope itemtype="http://schema.org/Offer">
									{product.items[0].sellers[0].commertialOffer.ListPrice !== product.items[0].sellers[0].commertialOffer.PriceWithoutDiscount &&
								        <span className="offer__price offer__price--old" itemprop="price">R$ {(product.items[0].sellers[0].commertialOffer.ListPrice).toFixed(2).replace(/\./g, ",").replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")}</span>
									}
							        <span className="offer__price offer__price--best" itemprop="price">R$ {(product.items[0].sellers[0].commertialOffer.PriceWithoutDiscount).toFixed(2).replace(/\./g, ",").replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")}</span>
							    </div>
							    <a href={product.items[0].sellers[0].addToCartLink} className='btn btn-success' title="Adicionar ao Carrinho" ><span>Adicionar ao Carrinho</span></a>
							</div>
							<div className='col-sm-12'>
								<div className="product__description" itemprop="description">
									<h2 className='product__description-title'>Descrição do Produto</h2>
							        <p>{product.description}</p>
							    </div>
							</div>
						</div>
					</div>
				</article>
			);
		}
	}
}

export default Product;