import React from 'react';
import Navigation from './landingPage/navigation/Navigation';
import {Row,Col,Form,Button,Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const JoinTeam = () => {

    return (
        <>
            <Navigation />
            <Button href="/home" size="lg" variant="info" className="cyan text-white home">Home</Button>
            <Button href="" size="lg" variant="info" className="cyan text-white team-selection">Team Area</Button>
            <Form className="registrationForm">
            <Container className="cyan form-header text-white p-2 mb-3">
          <h5> You Are Registered!</h5>
          <h5> Time to Join or Create a Team</h5>
        </Container>

        <p className="cyan-text">You can also wait to be recruited by, or assigned to a team.</p>
        <Button href="" size="lg" variant="warning" className="yellow text-dark button-center" block>Create a Team</Button>
        <p className="cyan-text">OR JOIN ONE</p>

                <Form.Group className="form-group">
                    <Form.Control required type="text" name="teamName" placeholder="Team 1 - No Name yet" />
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

export default JoinTeam;
