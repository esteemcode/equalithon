import React, { useState } from 'react';
import Navigation from './landingPage/navigation/Navigation';
import {Row, Col, Form, Button} from 'react-bootstrap';
import {Redirect} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

const RegistrationForm = props => {
    const [ data, setData ] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        redirect: false
    })

    const { firstName, lastName, email, password } = data;

    const onChangeHandler = e => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    }

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(
                "https://v1.nocodeapi.com/essteem/google_sheets/IgoNtzYsdlMmRjbd?tabId=registration",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify([[
                    firstName,
                    lastName,
                    email,
                    password,
                    new Date().toLocaleString()
                ]])
            });
            const json = await response.json();
            console.log("Success:", JSON.stringify(json));
            e.target.reset();
            setData({
                redirect: true
            });
        } catch (error) {
            console.error("Error:", error);
        }

 const emailNewMember = async (email) => {
            try {
                const response = await fetch(`
                https://v1.nocodeapi.com/josephineamos/mailchimp/cYRhtFLOTynxNLrh/members?list_id=5c5b621efb&email_address=${email}&status=subscribed`, {
                    method: "post",
                    headers: {
                        "Content-Type": "application/json"
                    }
                });
                const json = await response.json();
                console.log("Success:", JSON.stringify(json));
            } catch (error) {
                console.error("Error:", error);
            }
        }
        emailNewMember(email);
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
                {data.password !== data.confirmPassword ? (
                    <span className="text-danger small">Passwords don't match.</span>
                ) : null}
                <Row>
                    <Col>
                        <Form.Label className="text-secondary form-label">Already signed up? <a className="text-secondary" href='/login'>Log in</a></Form.Label>
                    </Col>
                    <Col >
                        <Button href="" variant="warning" className="yellow text-dark signup-button" type="submit">SIGN UP</Button>
                    </Col>
                    {data.redirect ? (<Redirect to='/registrationendnavigation' />) : (<div />)}
                </Row>
            </Form>
        </>
    )
}

export default RegistrationForm;
