import React from 'react';
import Navigation from './landingPage/navigation/Navigation';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const SelectLocation = () => {
    
    return (
        <>
            <Navigation />
            <Form className="registrationForm">
                <div className="cyan form-header text-white p-3 mb-3">
                    <h5 >Equalithon ＆ Team Selection</h5>
                    <p>Please add some information</p>
                </div>
                <Form.Group>
                    <Form.Control as="select">
                    <option>Country 1</option>
                    <option>Country 2</option>
                    <option>Country 3</option>
                    <option>Country 4</option>
                    <option>Country 5</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group className="form-group">
                    <Form.Control required type="text" name="city" placeholder="City" />
                </Form.Group>
                <Form.Group className="form-group">
                    <Form.Control required type="text" name="postCode" placeholder="Postcode" />
                </Form.Group>
                <Row>
                    <Col>
                        <Button href="/job-info" size="lg" variant="warning" className="yellow text-dark next mx-auto">Next</Button>
                    </Col>
                </Row>
            </Form>
        </>
    )
}

export default SelectLocation;