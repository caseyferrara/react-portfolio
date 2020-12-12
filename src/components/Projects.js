import React from 'react';
import project from '../images/project.jpg'
import newsfeed from '../images/newsfeed.jpg'
import portfolio from '../images/portfolio.jpg'
import { Button, Card, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import UilArrowCircleDown from '@iconscout/react-unicons/icons/uil-arrow-circle-down';
import { Link, animateScroll as scroll } from 'react-scroll';


const Projects = () => {
	return (
		<Container id='projects' className='projects'>
			<h1>My Projects</h1>
			<hr />
			<Row className='justify-content-center'>
				<Col className='mb-3'>
				<Card border='light' className='card'>
					<Card.Img variant='top' src={project} />
					<Card.Body>
						<Card.Title>Simple To-Do List</Card.Title>
						<Card.Text className='text'>
						Some quick example text to build on the card title and make up the bulk of
      					the card's content.
						</Card.Text>
						<Button variant='light'>Click</Button>
					</Card.Body>
				</Card>
				</Col>
				<Col className='mb-3'>
				<Card border='light' className='card'>
					<Card.Img variant='top' src={newsfeed} />
					<Card.Body>
						<Card.Title>React News Feed</Card.Title>
						<Card.Text className='text'>
						Some quick example text to build on the card title and make up the bulk of
      					the card's content.
						</Card.Text>
						<Button variant='light'>Click</Button>
					</Card.Body>
				</Card>
				</Col>
				<Col className='mb-3'>
				<Card border='light' className='card'>
					<Card.Img variant='top' src={portfolio} />
					<Card.Body>
						<Card.Title>React Portfolio</Card.Title>
						<Card.Text className='text'>
						Some quick example text to build on the card title and make up the bulk of
      					the card's content.
						</Card.Text>
						<Button variant='light'>Click</Button>
					</Card.Body>
				</Card>
				</Col>
			</Row>
			<Link
				activeClass='active'
				to='contact'
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

export default Projects;