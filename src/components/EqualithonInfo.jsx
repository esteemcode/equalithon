import React from 'react';
import Navigation from './landingPage/navigation/Navigation';
import {Row,Col,Form,Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const EqualithonInfo = () => {

    return (
        <>
            <Navigation />
            <Button href="/home" size="lg" variant="info" className="cyan text-white home">Home</Button>
            <Form className="registrationForm">
                <h5 className="cyan form-header text-white p-3 mb-3">Equalithon ＆ Team Selection INFO</h5>
                <Form.Group className="form-group">
                    <Form.Control type="text" name="teamName" placeholder="Gender Equalithon" />
                </Form.Group>
                <Row>
                    <Col lg={{ span: 6}}>
                        <Form.Control type="text" name="date-launch" placeholder="DATE LAUNCH" />
                    </Col>
                    <Col lg={{ span: 6}}>
                        <Form.Control type="text" name="date-launch" placeholder="DATE FINISH" />
                    </Col>
                </Row>
                <Form.Group className="form-group">
                    <Form.Control type="text" name="nonProfit" placeholder="Nonprofit Supported" />
                </Form.Group>
                <Form.Group className="form-group">
                    <Form.Control type="text" name="sponsor" placeholder="Sponsor A/B/C" />
                </Form.Group>
                <Form.Group name="teamDescription">
                    <Form.Control as="textarea" rows={3} placeholder="Gender Equalithon team description here..." />
                </Form.Group>
                <Form.Group className="form-group">
                    <Form.Control required type="text" name="challenge1" placeholder="Challenge 1" />
                </Form.Group>
                <Form.Group name="teamDescription">
                    <Form.Control as="textarea" rows={3} placeholder="Challenge 1 description here..." />
                </Form.Group>
                <Form.Group className="form-group">
                    <Form.Control type="text" name="challenge2" placeholder="Challenge 2" />
                </Form.Group>
                <Form.Group name="teamDescription">
                    <Form.Control as="textarea" rows={3} placeholder="Challenge 2 description here..." />
                </Form.Group>
                <Row className="text-center">
                    <Col lg={{ span: 6}}>
                        <Button href="/equalithon-selection" size="lg" variant="info" className="cyan text-white team-select-button mx-auto">Back to List</Button>
                    </Col>
                    <Col lg={{ span: 6}}>
                        <Button href="/select-location" size="lg" variant="warning" className="yellow text-dark team-select-button mx-auto">Participate</Button>
                    </Col>
                </Row>
            </Form>
        </>
    )
}

export default EqualithonInfo;
