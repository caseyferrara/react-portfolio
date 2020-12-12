import { Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, animateScroll as scroll } from 'react-scroll';
import React from 'react';
import logo from '../logo.svg'

const NavBar = () => {
	return (
		<div>
		<Navbar
			bg='dark'
			variant='dark'
			fixed='top'
			expand='lg'
		>
			<Link
				activeClass='active'
				to='top'
				spy={true}
				smooth={true}
				offset={-70}
				duration={500}
					>
			<Navbar.Brand className='text-light' href='#home'>
				<img
				className='rotate-center'
				alt='Logo'
				src={logo}
				width='45'
				height='45'
				/>
				Casey Ferrara
			</Navbar.Brand>
			</Link>
			<Navbar.Toggle aria-controls='responsive-navbar-nav' />
			<Navbar.Collapse id='responsive-navbar-nav'>
				<Nav>
					<Link
						activeClass='active'
						to='projects'
						spy={true}
						smooth={true}
						offset={-70}
						duration={500}
					>
						<Nav.Link className='text-light' href='#projects'>Projects</Nav.Link>
					</Link>
					<Link
						activeClass='active'
						to='contact'
						spy={true}
						smooth={true}
						offset={-70}
						duration={500}
					>
					<Nav.Link className='text-light' href='#contact'>Contact</Nav.Link>
					</Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
		</div>
	);
}

export default NavBar;