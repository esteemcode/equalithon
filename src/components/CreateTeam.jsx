import React from 'react';
import Navigation from './landingPage/navigation/Navigation';
import {Row,Col,Form,Button,Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const CreateTeam = () => {

    return (
        <>
            <Navigation />
            <Form className="registrationForm">
            <Container className="cyan form-header text-center text-white p-4 mb-3">
          <h4> Create a Team</h4>
        </Container>

                <Form.Group className="form-group">
                    <Form.Control required type="text" name="teamName" placeholder="Team 1 - No Name yet" />
                </Form.Group>
                <Form.Group className="form-group">
                    <Form.Control required type="text" name="challenge" placeholder="Challenge selected: Challenge 1" />
                </Form.Group>
                <Form.Group name="teamDescription">
                    <Form.Control as="textarea" rows={3} placeholder="Description: 2 new challenges only for this edition + option to support 2 past Equalithon winning apps. For the first time, crowdfund the apps to ensure impact and support Essteem."
                />
                </Form.Group>

                <Button href="" size="sm
                " variant="light" className="text-dark select mb-2 light-gray">Select</Button>

                <Form.Group className="form-group">
                <Form.Control required type="text" name="challenge" placeholder="Challenge selected: Challenge 2" />
                </Form.Group>
                <Form.Group name="teamDescription">
                    <Form.Control as="textarea" rows={3} placeholder="Description: 2 weeks, exceptionally, to maximize solutions’ impact.New mentoring and gamification of the event. Teams will use the new Equalithon app to create teams and connect with mentors in advance if possible."
                />
                </Form.Group>

                <Button href="" size="sm
                " variant="light" className="text-dark select mb-2 light-gray">Select</Button>

                <Form.Group className="form-group">
                    <Form.Control required type="text" name="teamLead" placeholder="Team lead: @Slack Handle Name" />
                </Form.Group>
                <Form.Group className="form-group">
                    <Form.Control required type="text" name="status" placeholder="Status: looking for members" />
                </Form.Group>
                <Col></Col>
                <Col>
                <Row className="float-right">
                <Button href="" size="sm" variant="light" className="text-dark mr-3 pl-4 pr-4 mb-2 light-gray">Yes</Button>
                <Button href="" size="sm" variant="light" className="text-dark pl-4 pr-4 mb-2 light-gray">No</Button>
                </Row>
                </Col>

                <Form.Group name="teamDescription">
                    <Form.Control as="textarea" rows={3} placeholder="Need: Front end developer, Backend developer, UX-UI developer"
                />
                </Form.Group>
                <Container>
                    <Row>
                    <Col md={8}></Col>
                    <Col md={4}>
                <Row className="float-right">
                <Button href="" size="sm
                " variant="light" className="text-dark mb-2 light-gray">Select Skills</Button>
                </Row>

                <Row className="float-right">
                <Button href="/teamArea" size="md" variant="warning" className="yellow text-dark mb-2">Create team</Button>
                </Row>
                </Col>
                </Row>
                </Container>
            </Form>
        </>
    )
}

export default CreateTeam;
