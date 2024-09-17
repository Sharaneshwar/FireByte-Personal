import { React, useState, useEffect } from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import './Navbar.css'

const Navbar = () => {
	const [isSticky, setIsSticky] = useState(false);

	const handleScroll = () => {
		setIsSticky(window.scrollY > 50);
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<nav className={`${isSticky ? 'sticky' : ''}`}>
			<div className="left">
				<span className='square' ><img src="/assets/images/icon.svg" alt="FireByte" /></span>
				<div id='company'>
					<span>FIREBYTE</span>
					<span>TECHNOLOGIES</span>
				</div>
			</div>
			<div className="middle">
				<a href="/">Home</a>
				<span className="separator">|</span>
				<a href="">Products</a>
				<span className="separator">|</span>
				<a href="">About Us</a>
			</div>
			<div className="right">
				<button className='call-button'>
					<FaPhoneAlt className="call-icon" />
					<span className="call-text">BOOK A CALL</span>
				</button>
			</div>
		</nav>
	)
}

export default Navbar