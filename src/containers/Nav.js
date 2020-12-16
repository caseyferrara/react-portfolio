import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../images/logo.png';
import { Image, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-scroll';
import Toggle from '../components/Toggler';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../containers/GlobalStyles';
import { lightTheme, darkTheme } from '../containers/Theme';
import { useDarkMode } from '../containers/useDarkMode';

const NavBar = () => {

    const [theme, themeToggler] = useDarkMode();

    const themeMode = theme === 'light' ? lightTheme : darkTheme;

	return (
		<ThemeProvider theme={themeMode}>
		<GlobalStyles />
		<div>
		<Navbar
			className='nav-font'
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
				className='text-light bounce-in-left'
			>
			<Image
				className='logo'
				src={logo}
			/>
			</Link>
			<Navbar.Toggle className='toggle' aria-controls='responsive-navbar-nav'>

			</Navbar.Toggle>
			<Navbar.Collapse id='responsive-navbar-nav'>
				<Nav>
					<Link
						activeClass='active'
						to='projects'
						spy={true}
						smooth={true}
						offset={-70}
						duration={500}
						className='text-light nav-links'
					>
					Projects
					</Link>
					<Link
						activeClass='active'
						to='contact'
						spy={true}
						smooth={true}
						offset={-70}
						duration={500}
						className='text-light nav-links'
					>
					Contact
					</Link>
				</Nav>
				<Nav className='ml-auto'>
					<Toggle theme={theme} toggleTheme={themeToggler} />
				</Nav>
			</Navbar.Collapse>
		</Navbar>
		</div>
		</ThemeProvider>
	);
}

export default NavBar;