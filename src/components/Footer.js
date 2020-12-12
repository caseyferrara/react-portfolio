import {ListGroup, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, animateScroll as scroll } from 'react-scroll';
import UilGithub from '@iconscout/react-unicons/icons/uil-github';
import UilLinkedin from '@iconscout/react-unicons/icons/uil-linkedin';
import React from 'react';

const Footer = () => {

	return (
		<Container className='footer'>
			<Row>
				<Col lg={{span: 4, offset: 4}}>
					<h2 className='footer-text'>Created by Casey Ferrara</h2>
				</Col>
				<Col xs={{span: 3.5, offset: 3.5}} lg={{span: 2, offset: 2}} className='social'>
  						<UilGithub className='footer-links' size='50' color='#FFF'/>
						<UilLinkedin className='footer-links' size='50' color='#FFF'/>
				</Col>
			</Row>
		</Container> 
	);
}

export default Footer;