import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Navbar from './navbar/Navbar';
import Home from './home/Home';
import Product from './product/Product';

class App extends Component {
	render() {
		return(
			<Router>
				<div className=''>
					<Navbar />
					<Route path="/" exact strict component={Home}/>
					<Route path="/produto/:productID/:textLink" component={Product}/>
					
				</div>
			</Router>
		);
	}
}
export default App;