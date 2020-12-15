import React, { useState } from 'react';
import Navigation from './landingPage/navigation/Navigation';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const RegistrationForm = props => {
    const [ formState, setFormState ] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    const onChangeHandler = e => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        });
    }

    const onSubmitHandler = e => {
        e.preventDefault();
        console.log(formState);
    }

    
    return (
        <>
            <Navigation />
            <Form className="registrationForm" onSubmit={onSubmitHandler}>
                <h5 className="cyan form-header text-white p-3 mb-3">Sign up</h5>
                <Form.Group className="form-group">
                    <Form.Control required type="text" name="firstName" placeholder="First Name" onChange={onChangeHandler} />
                </Form.Group>
                <Form.Group className="form-group">
                    <Form.Control required type="text" name="lastName" placeholder="Last Name" onChange={onChangeHandler} />
                </Form.Group>
                <Form.Group className="form-group">
                    <Form.Control required type="email" placeholder="E-mail" name="email" onChange={onChangeHandler} />
                </Form.Group>
                <Form.Group className="form-group">
                    <Form.Control required type="password" minLength="6" maxLength="8" size="8" placeholder="Password" name="password" onChange={onChangeHandler} />
                </Form.Group>
                <Form.Group className="form-group">
                    <Form.Control required type="password" minLength="6" maxLength="8" size="8" placeholder="Confirm password" name="confirmPassword" onChange={onChangeHandler} />
                </Form.Group>
                {formState.password !== formState.confirmPassword ? (
                    <span className="text-danger small">Password don't match.</span>
                ) : null}
                <Row>
                    <Col>
                        <Form.Label className="text-secondary form-label">Already signed up? <a className="text-secondary" href='/login'>Log in</a></Form.Label>
                    </Col>
                    <Col >
                        <Button href="" variant="warning" className="yellow text-dark signup-button" type="submit">SIGN UP</Button>
                    </Col>
                </Row>
            </Form>
        </>
    )
}

export default RegistrationForm;