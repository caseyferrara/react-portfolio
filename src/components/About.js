import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import pic from '../images/pic.jpg';
import { ListGroup, Image, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-scroll';
import { Html5 } from '@icons-pack/react-simple-icons';
import { Css3 } from '@icons-pack/react-simple-icons';
import { Javascript } from '@icons-pack/react-simple-icons';
import { ReactJs } from '@icons-pack/react-simple-icons';
import { Bootstrap } from '@icons-pack/react-simple-icons';
import { Git } from '@icons-pack/react-simple-icons';
import { Github } from '@icons-pack/react-simple-icons';
import { Npm } from '@icons-pack/react-simple-icons';
import UilArrowCircleDown from '@iconscout/react-unicons/icons/uil-arrow-circle-down';




const About = () => {
	return (
		<Container id='top' className='about'>
			<Image
			className='pic puff-in-center'
			src={pic}
			roundedCircle
			/>
			<Row className='justify-content-center'>
				<Col>
					<h1 className='puff-in-center intro'>My name is Casey Ferrara and I am a Web Developer</h1>
				</Col>
			</Row>
			<hr />
			<Row>
				<Col>
					<ListGroup horizontal className='justify-content-center lang-group'>
						<ListGroup.Item variant='light'><h2>HTML5</h2><Html5 size='50' color='#3b8d99'/></ListGroup.Item>
						<ListGroup.Item variant='light'><h2>CSS3</h2><Css3 size='50' color='#3b8d99'/></ListGroup.Item>
						<ListGroup.Item variant='light'><h2>Javascript</h2><Javascript size='50' color='#3b8d99'/></ListGroup.Item>
						<ListGroup.Item variant='light'><h2>ReactJs</h2><ReactJs size='50' color='#3b8d99'/></ListGroup.Item>
					</ListGroup>
					<ListGroup horizontal className='justify-content-center lang-group lang-list'>
						<ListGroup.Item variant='light'><h2>Bootstrap</h2><Bootstrap size='50' color='#3b8d99'/></ListGroup.Item>
						<ListGroup.Item variant='light'><h2>Git</h2><Git size='50' color='#3b8d99'/></ListGroup.Item>
						<ListGroup.Item variant='light'><h2>Github</h2><Github size='50' color='#3b8d99'/></ListGroup.Item>
						<ListGroup.Item variant='light'><h2>NPM</h2><Npm size='50' color='#3b8d99'/></ListGroup.Item>
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
			<UilArrowCircleDown className='arrow' size='50' color='#3b8d99' />
			</Link>
		</Container>
	);
}

export default About;