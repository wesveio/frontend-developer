import React, { Component } from 'react';
import './Home.css';
import GridProduct from '../grid/GridProducts';

class Home extends Component {
	render() {
		return (
			<div>
				<div className='banner'>
					<div className='container'>
						<img alt='' src='https://anymarket.com.br/uploads/img_banner_marketplaces.png' />
					</div>
				</div>
				<div>
					<div className='container'>
						<GridProduct />
					</div>
				</div>
			</div>
		);
	}
}

export default Home;