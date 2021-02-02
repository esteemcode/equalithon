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


        <h6 className="cyan-text">You can also wait to be recruited by, or assigned to a team.</h6>
        <Button href="" size="lg" variant="warning" className="yellow text-dark button-center" block>Create a Team</Button>
        <h6 className="cyan-text">OR JOIN ONE</h6>

                <Form.Group className="form-group">
                    <Form.Control required type="text" name="teamName" placeholder="Team 1 - No Name yet" />
                </Form.Group>
                <Form.Group className="form-group">
                    <Form.Control required type="text" name="challenge" placeholder="Challenge selected: Challenge 1" />
                </Form.Group>
                <Form.Group className="form-group">
                    <Form.Control required type="text" name="teamLead" placeholder="Team lead: @Slack Handle Name" />
                </Form.Group>
                <Form.Group className="form-group">
                    <Form.Control required type="text" name="status" placeholder="Status: looking for members" />
                </Form.Group>
                <Form.Group name="teamDescription">
                    <Form.Control as="textarea" rows={3} placeholder="Need: Front end developer, Backend developer, UX-UI developer"
                />
                </Form.Group>
                <Container>
                <Row>
                <Col md={8}></Col>
                    <Col md={4}>
                        <Row className="text-center mt-2">
                        <Button href="" size="sm" variant="warning" className="yellow text-dark request-to-join-team ml-5 mr-2">Request to Join</Button>
                        </Row>
                        <Row className="text-center mt-2">
                        <Button href="" size="sm" variant="warning" className="yellow text-dark request-to-join-team mr-2">Request to Join as a Mentor</Button>
                        </Row>
                        </Col>
                </Row>
                </Container>
                <br />
                <Form.Group className="form-group">
                    <Form.Control required type="text" name="teamName" placeholder="Equalizers" />
                </Form.Group>
                <Form.Group className="form-group">
                    <Form.Control required type="text" name="challenge" placeholder="Challenge selected: Challenge 2" />
                </Form.Group>
                <Form.Group className="form-group">
                    <Form.Control required type="text" name="teamLead" placeholder="Team lead: @Slack Handle Name" />
                </Form.Group>
                <Form.Group className="form-group">
                    <Form.Control required type="text" name="status" placeholder="Status: looking for members" />
                </Form.Group>
                <Form.Group name="teamDescription">
                    <Form.Control as="textarea" rows={3} placeholder="Need: Front end developer, Backend developer, UX-UI developer"
                />
                </Form.Group>
                <Container>
                <Row>
                <Col md={8}></Col>
                    <Col md={4}>
                        <Row className="text-center mt-2">
                        <Button href="" size="sm" variant="warning" className="yellow text-dark request-to-join-team ml-5 mr-2">Request to Join</Button>
                        </Row>
                        <Row className="text-center mt-2">
                        <Button href="" size="sm" variant="warning" className="yellow text-dark request-to-join-team mr-2">Request to Join as a Mentor</Button>
                        </Row>
                        </Col>
                </Row>
                </Container>
            </Form>
        </>
    )
}

export default JoinTeam;
