import React from 'react';
import Navigation from './landingPage/navigation/Navigation';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

/* THIS
LISTS
ALL
ACTIVE
EQUALITHONS
TO
JOIN */

const EqualithonSelection = () => {

    return (
        <>
            <Navigation />
            <Button href="/home" size="lg" variant="info" className="cyan text-white home">Home</Button>
            <Form className="registrationForm">
                <h5 className="cyan form-header text-white p-3 mb-3">Equalithon ＆ Team Selection</h5>
                <Form.Group className="form-group">
                    <Form.Control required type="text" name="teamName" placeholder="Gender Equalithon" />
                </Form.Group>
                <Form.Group className="form-group">
                    <Form.Control required type="date" name="date"
                    min="2020-01-01" max="2021-12-31" />
                </Form.Group>
                <Form.Group className="form-group">
                    <Form.Control required type="text" name="nonProfit" placeholder="Nonprofit Supported" />
                </Form.Group>
                <Form.Group className="form-group">
                    <Form.Control required type="text" name="sponsor" placeholder="Sponsor A/B/C" />
                </Form.Group>
                <Form.Group name="teamDescription">
                    <Form.Control as="textarea" rows={3} placeholder="Gender Equalithon team description here..." />
                </Form.Group>
                <Row className="text-center mt-3">
                    <Col lg={{ span: 6}}>
                        <Button href="/equalithon-info" size="lg" variant="info" className="cyan text-white team-select-button mx-auto">Learn More</Button>
                    </Col>
                    <Col lg={{ span: 6}}>
                        <Button href="/select-location" size="lg" variant="warning" className="yellow text-dark team-select-button mx-auto">Participate</Button>
                    </Col>
                </Row>
                <Form.Group className="form-group">
                    <Form.Control className="mt-3" required type="text" name="teamName" placeholder="BLM Equalithon" />
                </Form.Group>
                <Form.Group className="form-group">
                    <Form.Control required type="date" name="date"
                    min="2020-01-01" max="2021-12-31" />
                </Form.Group>
                <Form.Group className="form-group">
                    <Form.Control required type="text" name="nonProfit" placeholder="Nonprofit Supported" />
                </Form.Group>
                <Form.Group className="form-group">
                    <Form.Control required type="text" name="sponsor" placeholder="Sponsor A/B/C" />
                </Form.Group>
                <Form.Group name="teamDescription">
                    <Form.Control as="textarea" rows={3} placeholder="BLM Equalithon team description here..." />
                </Form.Group>
                <Row className="text-center mt-3">
                    <Col lg={{ span: 6}}>
                        <Button href="/equalithon-info" size="lg" variant="info" className="cyan text-white team-select-button mx-auto">Learn More</Button>
                    </Col>
                    <Col lg={{ span: 6}}>
                        <Button href="/select-location" size="lg" variant="warning" className="yellow text-dark team-select-button mx-auto">Participate</Button>
                    </Col>
                </Row>
            </Form>
        </>
    )
}

export default EqualithonSelection;
