import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const RegistrationForm = () => {

    return (
        <Form className="registrationForm">
            <Form.Group>
                <Form.Label for="firstName">First Name</Form.Label>
                <Form.Control type="text" id="firstName" placeholder="Enter your First Name" />
            </Form.Group>

            <Form.Group>
                <Form.Label for="lastName">Last Name</Form.Label>
                <Form.Control type="text" id="lastName" placeholder="Enter your Last Name" />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />
                <Form.Text className="text-muted">
                Email must contain @ symbol and "."
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Enter your Password" />
                <Form.Text className="text-muted">
                Password must contain 8 characters and one Capitalized letter </Form.Text>
            </Form.Group>

            <Form.Group controlId="confirmPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="confirmPassword" placeholder="Confirm you Password" />
            </Form.Group>

            <Button type="submit" variant="primary">Submit</Button>
        </Form>
    )
}

export default RegistrationForm;