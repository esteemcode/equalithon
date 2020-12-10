import React from 'react';
import Navigation from './landingPage/navigation/Navigation';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const RegistrationForm = () => {

    return (
        <>
            <Navigation />
            <Form className="registrationForm">
                <h5 className="cyan form-header text-white p-3 mb-3">Sign up</h5>
                <Form.Group className="form-group">
                    <Form.Control type="text" id="firstName" placeholder="First Name" />
                </Form.Group>
                <Form.Group className="form-group">
                    <Form.Control type="text" id="lastName" placeholder="Last Name" />
                </Form.Group>
                <Form.Group className="form-group" controlId="email">
                    <Form.Control type="email" placeholder="E-mail" />
                </Form.Group>
                <Form.Group className="form-group" controlId="password">
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="form-group" controlId="confirmPassword">
                    <Form.Control type="confirmPassword" placeholder="Confirm password" />
                </Form.Group>
                <Row>
                    <Col>
                        <Form.Label className="text-secondary form-label">Already signed up? <a className="text-secondary" href='/login'>Log in</a></Form.Label>
                    </Col>
                    <Col >
                        <Button href="/home" variant="warning" className="yellow text-dark signup-button" type="submit">SIGN UP</Button>
                    </Col>
                </Row>
            </Form>
        </>
    )
}

export default RegistrationForm;