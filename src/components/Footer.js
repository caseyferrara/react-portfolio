import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Github } from '@icons-pack/react-simple-icons';
import { Linkedin } from '@icons-pack/react-simple-icons';


const Footer = () => {

	return (
		<Container fluid className='footer'>
			<Row>
				<Col lg={{span: 4, offset: 4}}>
					<h3 className='footer-text'>Created by Casey Ferrara</h3>
				</Col>
				<Col xs={{span: 3.5, offset: 3.5}} lg={{span: 2, offset: 2}} className='social'>
  						<a 
  						href='https://github.com/caseyferrara' 
  						target='_blank' rel='noreferrer' 
  						className='contact-link'>
  							<Github size='50' color='#FFF'/>
  						</a>
  						<a 
  						href='https://www.linkedin.com/in/casey-ferrara-199b6517b/' 
  						target='_blank' rel='noreferrer' 
  						className='contact-link'>
							<Linkedin size='50' color='#FFF'/>
						</a>
				</Col>
			</Row>
		</Container> 
	);
}

export default Footer;