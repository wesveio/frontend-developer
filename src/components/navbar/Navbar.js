import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Search from '../search/Search';

const Navbar = () => {
	return (
		<nav className='navbar fixed-top'>
			<div id="navbar__overlay" className=''></div>
			<div className='container'>
				<div className='logo'>
					<Link to='/'><img src='/images/logo.png' alt='' /></Link>
				</div>
				<Search />
				<div className='cart'></div>
			</div>
		</nav>
	);
}

export default Navbar;