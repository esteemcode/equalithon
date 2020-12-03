import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const SignIn = () => {

    return (
    <div>    
        <h2>SIGN UP</h2>
    <Form className="SignIn">
        <Form.Group>
            <Form.Label for="firstName">First Name</Form.Label>
            <Form.Control type="text" id="firstName" placeholder="first name" />
        </Form.Group>

        <Form.Group>
            <Form.Label for="lastName">Last Name</Form.Label>
            <Form.Control type="text" id="lastName" placeholder="last name" />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="email address" />
        </Form.Group>

        <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="password" />
        </Form.Group>

        <Form.Group controlId="confirmPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="confirmPassword" placeholder="Confirm password" />
        </Form.Group>

        <Form.Text className="text-muted">Already signed up?</Form.Text>

        <Button type="submit" variant="primary">Login</Button>
    </Form>
    </div>
)
}

export default SignIn;