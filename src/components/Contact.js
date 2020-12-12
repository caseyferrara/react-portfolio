import React, { useState } from 'react';
import project from '../images/project.jpg'
import newsfeed from '../images/newsfeed.jpg'
import { Form, Accordion, Card, Button, Container, Row, Col } from 'react-bootstrap';
import { Link, animateScroll as scroll } from 'react-scroll';
import UilArrowCircleUp from '@iconscout/react-unicons/icons/uil-arrow-circle-up';
import 'bootstrap/dist/css/bootstrap.min.css';

const Contact = () => {

	return (
		<Container id='contact' className='contact'>
					<h1>Contact Me!</h1>
					<hr />
			<Row className='justify-content-center'>
					<Col lg='6' className='dropdown'>
						<Accordion defaultActiveKey="0">
  							<Card>
    							<Card.Header>
      								<Accordion.Toggle as={Button} variant="dark" eventKey="0">
        								Click me!
      								</Accordion.Toggle>
    							</Card.Header>
    								<Accordion.Collapse eventKey="0">
      									<Card.Body>Hello! I'm the body</Card.Body>
    								</Accordion.Collapse>
  							</Card>
  						</Accordion>
					</Col>
					<Col lg='6'>
						<Form className='form-color'>
  							<Form.Group controlId="formBasicName">
    							<Form.Label>Name</Form.Label>
    							<Form.Control type="name" placeholder="Enter name" />
  							</Form.Group>
  							<Form.Group controlId="formBasicEmail">
    							<Form.Label>Email address</Form.Label>
    							<Form.Control type="email" placeholder="Enter email" />
  							</Form.Group>
  							<Form.Group controlId="ControlTextarea1">
    							<Form.Label>Message</Form.Label>
    							<Form.Control as="textarea" rows={3} />
    							<Form.Text className="text-muted">
      							We'll never share your email with anyone else.
    							</Form.Text>
  							</Form.Group>
  						</Form>
						<Button bg='light' variant='light'>Submit</Button>
					</Col>				
			</Row>
			<Link
				activeClass='active'
				to='top'
				spy={true}
				smooth={true}
				offset={-70}
				duration={500}
			>
			<UilArrowCircleUp className='arrow' size='50' color='#FFF' />
			</Link>
		</Container>
	);
}

export default Contact;