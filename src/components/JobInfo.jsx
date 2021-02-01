import React from 'react';
import Navigation from './landingPage/navigation/Navigation';
import {Row,Col,Form,Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const JobInfo = () => {
    return (
        <>
            <Navigation />
            <Form className="registrationForm">
                <h5 className="cyan form-header text-white p-3 mb-3">Job Information</h5>
                <Form.Group className="form-group">
                    <Form.Control required type="text" name="linkedIn" placeholder="LinkedIn Profile" />
                </Form.Group>
                <Form.Group className="form-group">
                    <Form.Control required type="text" name="job" placeholder="Current Job or Desired Job Title" />
                </Form.Group>
                <Form.Group name="mainSpecialty">
                    <Form.Control as="select">
                        <option default>Main Specialty</option>
                        <option>Frontend Developer</option>
                        <option>Backend Developer</option>
                        <option>Fullstack Developer</option>
                        <option>Software Application Engineer</option>
                        <option>Other Software Engineer</option>
                        <option>Data Scientist or Engineer</option>
                        <option>Business Analyst</option>
                        <option>Tech Project Manager</option>
                        <option>Other Project Manager</option>
                        <option>Tech Sales and Marketing</option>
                        <option>Other Sales and Marketing</option>
                        <option>Other</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group name="experience">
                    <Form.Control as="select">
                        <option default>Experience at main specialty</option>
                        <option>0-1</option>
                        <option>1-2</option>
                        <option>2-5</option>
                        <option>5-10</option>
                        <option>10-15</option>
                        <option>≻15</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group className="form-group">
                    <Form.Control required type="text" name="company" placeholder="Company or last employer" />
                </Form.Group>
                <Form.Group className="form-group">
                    <Form.Control required type="text" name="numEmployees" placeholder="Number of employees" />
                </Form.Group>
                <Form.Group name="mainSpecialty">
                    <Form.Control as="select">
                        <option default>Sector - Industry</option>
                        <option>Option1</option>
                        <option>Option2</option>
                        <option>Option3</option>
                    </Form.Control>
                </Form.Group>
                <Row>
                    <Col>
                        <Button href="./company-rating" size="lg" variant="warning" className="yellow text-dark next mx-auto">Next</Button>
                    </Col>
                </Row>
            </Form>
        </>
    )
}

export default JobInfo;
