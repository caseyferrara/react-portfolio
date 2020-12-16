import React, {Component} from 'react';
import { Form, Accordion, Card, Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-scroll';
import { Github } from '@icons-pack/react-simple-icons';
import { Linkedin } from '@icons-pack/react-simple-icons';
import { Gmail } from '@icons-pack/react-simple-icons';
import UilArrowCircleUp from '@iconscout/react-unicons/icons/uil-arrow-circle-up';
import 'bootstrap/dist/css/bootstrap.min.css';
import emailjs from 'emailjs-com';

class Contact extends Component {

    constructor(props) {
      super(props);
      this.state = {
        name: '',
        email: '',
        message: '',
      };
    }

    handleNameChange(event) {
      event.preventDefault();
      this.setState({ name: event.target.value });
    }

    handleEmailChange(event) {
      event.preventDefault();
      this.setState({ email: event.target.value });
    }

    handleMessageChange(event) {
      event.preventDefault();
      this.setState({ message: event.target.value });
    }

    sendEmail(e) {
    e.preventDefault();

    const templateParams = {
      from_name: this.state.name + " (" + this.state.email + ") ",
      to_name: 'Casey Ferrara',
      message: this.state.message
    };

    emailjs
          .send('service_konm1rs', 'template_sv42f5y', templateParams, 'user_1HklOeuw0LvGLO6XXBnJb') 
          .then(
              function(response) {
                alert('Your message was successfully sent!')
                console.log('SUCCESS!', response.status, response.text)
              },
              
              function(error) {
                alert('Your message was unable to send.')
                console.log('FAILED...', error);
              }
        );

    this.setState({
      name: '',
      email: '',
      message: '',
    });
  }

	render() {
    return (
		<Container id='contact' className='contact'>
					<h1>Contact</h1>
					<hr />
			<Row className='justify-content-center'>
					<Col lg='6' className='dropdown'>
						<Accordion defaultActiveKey="0">
  							<Card>
    							<Card.Header>
      								<Accordion.Toggle as={Button} variant='dark' eventKey="1">
        								Contact Info
      								</Accordion.Toggle>
    							</Card.Header>
    								<Accordion.Collapse eventKey="1">
      									<Card.Body>
                          <p>
                          <Gmail size='25' color='#FFF'/>
                          casey.ferrara@outlook.com
                          </p>
                          <p>
                          <a href='https://github.com/caseyferrara' target='_blank' rel='noreferrer'>
                          <Github size='25' color='#FFF'/>Github</a>
                          </p>
                          <p>
                          <a href='https://www.linkedin.com/in/casey-ferrara-199b6517b/' target='_blank' rel='noreferrer'>
                          <Linkedin size='25' color='#FFF'/>Linkedin</a>
                          </p>
                        </Card.Body>
    								</Accordion.Collapse>
  							</Card>
  						</Accordion>
					</Col>
					<Col lg='6'>
						<Form className='form-color'>
  							<Form.Group controlId="formBasicName">
    							<Form.Label>Name</Form.Label>
    							<Form.Control 
                  value={this.state.name}
                  type="name" 
                  placeholder="Enter name" 
                  onChange={this.handleNameChange.bind(this)}
                  />
  							</Form.Group>
  							<Form.Group controlId="formBasicEmail">
    							<Form.Label>Email address</Form.Label>
    							<Form.Control 
                  value={this.state.email}
                  onChange={this.handleEmailChange.bind(this)} 
                  type="email" 
                  placeholder="Enter email" 
                  />
  							</Form.Group>
  							<Form.Group controlId="ControlTextarea1">
    							<Form.Label>Message</Form.Label>
    							<Form.Control 
                  value={this.state.message}
                  onChange={this.handleMessageChange.bind(this)} 
                  as="textarea" 
                  rows={3} 
                  />
    							<Form.Text className="text-muted">
      							We'll never share your email with anyone else.
    							</Form.Text>
  							</Form.Group>
  						</Form>
						<Button 
            onClick={this.sendEmail.bind(this)} 
            bg='light' 
            variant='dark'
            >
            Submit
            </Button>
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
			<UilArrowCircleUp className='arrow' size='50' color='#3b8d99' />
			</Link>
		</Container>
    );
	}
}


export default Contact;