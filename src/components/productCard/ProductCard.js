import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css';


const ProductCard = ({ productID, linkText, link, productName, price, imageUrl, imageID, imgSize}) => {
	return (
		<div className='productCard'>
			<Link to={`/produto/${productID}/${linkText}`}>
				<div className={'productCard__photo ' + (imageUrl.length ? '' : 'animated-background')}>
					<img className='productCard__img' src={imageUrl.replace(imageID, imageID+'-'+imgSize+'-'+imgSize)} alt={productName} />
				</div>
				<p className='productCard__name'>{productName}</p>
				<p className='productCard__price'>R$ {price.toFixed(2).replace(/\./g, ",").replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")}</p>
			</Link>
		</div>
	);
}

export default ProductCard;