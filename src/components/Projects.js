import React from 'react';
import project from '../images/project.jpg'
import newsfeed from '../images/newsfeed.jpg'
import portfolio from '../images/portfolio.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-scroll';
import UilArrowCircleDown from '@iconscout/react-unicons/icons/uil-arrow-circle-down';

const Projects = () => {
	return (
		<Container id='projects' className='projects'>
			<h1>My Projects</h1>
			<hr />
			<Row className='justify-content-center'>
				<Col className='mb-3'>
				<Card className='card'>
					<Card.Img variant='top' src={project} />
					<Card.Body>
						<Card.Title>Simple To-Do List</Card.Title>
						<Card.Text>
						A simple to-do list that lets the user add any to-do they want. Once
						a to-do is added the user can mark done by clicking once or remove it 
						by clicking twice. This app uses LocalStorage to save the users to-dos.
						</Card.Text>
						<Button variant='dark'>
						<a 
						href='https://caseyferrara.github.io/Simple-ToDo-List/' 
						target='_blank' 
						rel='noreferrer'>
						Demo
						</a>
						</Button>
						<Button variant='dark'>
						<a href='https://github.com/caseyferrara/Simple-ToDo-List' 
						target='_blank' 
						rel='noreferrer'>
						Live Code
						</a>
						</Button>
					</Card.Body>
				</Card>
				</Col>
				<Col className='mb-3'>
				<Card className='card'>
					<Card.Img variant='top' src={newsfeed} />
					<Card.Body>
						<Card.Title>React News Feed</Card.Title>
						<Card.Text>
						A react web application that simulates a news feed. 
						The user can search through the news feed and even add a new post to the feed. 
						</Card.Text>
						<Button variant='dark'>
						<a 
						href='https://caseyferrara.github.io/newsfeed/' 
						target='_blank' 
						rel='noreferrer'>
						Demo
						</a>
						</Button>
						<Button variant='dark'>
						<a 
						href='https://github.com/caseyferrara/newsfeed' 
						target='_blank' 
						rel='noreferrer'>
						Live Code
						</a>
						</Button>
					</Card.Body>
				</Card>
				</Col>
				<Col className='mb-3'>
				<Card className='card'>
					<Card.Img variant='top' src={portfolio} />
					<Card.Body>
						<Card.Title>React Portfolio</Card.Title>
						<Card.Text>
						A portfolio I made for myself using React. It contains my skillset, projects, and
						contact information. The contact form uses EmailJS to send emails directly to my
						inbox.
						</Card.Text>
						<Button variant='dark'>
						<a 
						href='https://caseyferrara.github.io/react-portfolio/' 
						target='_blank' 
						rel='noreferrer'>
						Demo
						</a>
						</Button>
						<Button variant='dark'>
						<a 
						href='https://github.com/caseyferrara/react-portfolio' 
						target='_blank' 
						rel='noreferrer'>
						Live Code
						</a>
						</Button>
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
			<UilArrowCircleDown className='arrow' size='50' color='#3b8d99' />
			</Link>
		</Container>
	);
}

export default Projects;