import React from 'react';
import pic from '../images/pic.jpg';
import { ListGroup, Image, Container, Row, Col } from 'react-bootstrap';
import { Link, animateScroll as scroll } from 'react-scroll';
import 'bootstrap/dist/css/bootstrap.min.css';
import UilHTML5 from '@iconscout/react-unicons/icons/uil-html5';
import UilCSS from '@iconscout/react-unicons/icons/uil-css3-simple';
import UilJavascript from '@iconscout/react-unicons/icons/uil-java-script';
import UilReact from '@iconscout/react-unicons/icons/uil-react';
import UilArrowCircleDown from '@iconscout/react-unicons/icons/uil-arrow-circle-down';




const About = () => {
	return (
		<Container id='top' className='about'>
			<Image
			className='pic rotate-center'
			src={pic}
			roundedCircle
			/>
			<Row className='justify-content-center'>
				<Col>
					<h1 className='puff-in-center'>My name is Casey Ferrara and I am a Web Developer</h1>
				</Col>
			</Row>
			<hr />
			<Row className='lang'>
				<Col>
					<ListGroup horizontal className='justify-content-center'>
						<ListGroup.Item variant='dark'><UilHTML5 size='50' color='#FFF'/></ListGroup.Item>
						<ListGroup.Item variant='dark'><UilCSS size='50' color='#FFF'/></ListGroup.Item>
						<ListGroup.Item variant='dark'><UilJavascript size='50' color='#FFF'/></ListGroup.Item>
						<ListGroup.Item variant='dark'><UilReact size='50' color='#FFF'/></ListGroup.Item>
					</ListGroup>
				</Col>
			</Row>
			<Link
				activeClass='active'
				to='projects'
				spy={true}
				smooth={true}
				offset={-70}
				duration={500}
			>
			<UilArrowCircleDown className='arrow' size='50' color='#FFF' />
			</Link>
		</Container>
	);
}

export default About;