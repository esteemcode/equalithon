import React, { useState } from 'react';
import Navigation from './landingPage/navigation/Navigation';
import {Row, Col, Form, Button, Container} from 'react-bootstrap';
import {Redirect} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';


// signin Email id and password and a button
//we capture userid and passwrd a user enters
//We retrive the json list of registration data
// user input we compare against registered list of data
// if


const SignIn = props => {
    const [ data, setData ] = useState({
        pemail: "",
        ppassword: "",
        home: false,
        register: false,
    })

    const {pemail, ppassword } = data;

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
                "https://v1.nocodeapi.com/essteem/google_sheets/IgoNtzYsdlMmRjbd?tabId=profile",
            {
                method: "get",
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const json = await response.json();
            const auth = json.data.some((each) => {
                console.log('email: ', each.pemail, 'password: ', each.ppassword)
                return (pemail === each.pemail && ppassword === each.ppassword)})
            auth ? (setData({ home: true, register: false})) : (setData({register: true}))
            e.target.reset();
        } catch (error) {
            console.error("Error:", error);
        }

    }

    return (
        <>
            <Navigation />
            <Form className="registrationForm" onSubmit={onSubmitHandler}>
                <h5 className="cyan form-header text-white p-3 mb-3">Sign up</h5>
                <Form.Group className="form-group">
                    <Form.Control required type="email" placeholder="E-mail" name="pemail" onChange={onChangeHandler} />
                </Form.Group>
                <Form.Group className="form-group">
                    <Form.Control required type="password" minLength="6" maxLength="8" size="8" placeholder="Password" name="ppassword" onChange={onChangeHandler} />
                </Form.Group>
                <Row>
                    <Col >
                        <Button href="" variant="warning" className="yellow text-dark signup-button" type="submit">SIGN IN</Button>
                    </Col>
                    {data.register ? (<Container className="mt-2"><p className='inline'>Either email or password are incorrect. Please try again or</p><a className="cyan-text inline" href='/'> sign up.</a></Container>) : (<div />)}
                    {data.home ? (<Redirect to='/home' />) : (<div />)}
                </Row>
            </Form>
        </>
    )
}

export default SignIn;
