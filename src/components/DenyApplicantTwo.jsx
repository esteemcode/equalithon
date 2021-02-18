import { React } from 'react';
import Navigation from './landingPage/navigation/Navigation';
import { Row, Col, Form, Button, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const DenyApplicantTwo = () => {

    return (
        <>
            <Navigation />
            <Form className="registrationForm">
                <Container className="orange form-header text-white header-center p-3 mb-3">
                    <h4> Deny An Applicant</h4>
                    <h6> Quick Acknowledgements</h6>
                </Container>
                <p className="make">Your contacts will recieve a slack message with your explanation</p>
                <Form>
                    <Form.Group className="form-group">
                        <div className="row">
                            <div className="col-6">
                                <input type="text" className="form-control mb-2" placeholder="Your Slack">
                                </input>
                            </div>
                            <div className="col-6">
                                <input type="text" className="form-control mb-2" placeholder="Applicant Slack">
                                </input>
                            </div>
                        </div>

                        <Form.Control as="textarea" rows={6} placeholder="Your Message" />
                    </Form.Group>
                </Form>
                <Container className="section">
                    <strong>Message samples: </strong>
                    <p>Hi, I am so sorry we cannot accept you in the team anymore because our  team is now full - but let’s connect 1-1 on Slack and support each other in the future!</p>

                    <p>Hi, I am so sorry we cannot accept you in the team anymore because your  skills seem to not match what we were looking for.However I’d love to connect 1-1 on Slack and try and support each other in the future!</p>

                    <p>Hi, I am so sorry we cannot accept you in the team anymore because I am waiting for my usual crew to sign up to the team :) .However I’d love to connect 1-1 on Slack and try and support each other in the future!</p>
                </Container>

                <Row className="text-center mt-3">
                    <Col lg={{ span: 6 }}>
                        <Button href="#" size="lg" variant="info" className="deny-cancel cyan text-white team-select-button">Cancel denial</Button>
                    </Col>
                    <Col lg={{ span: 6 }}>
                        <Button href="#" size="lg" variant="warning" className="deny-send next">Send</Button>
                    </Col>
                </Row>

            </Form>
        </>
    )
}

export default DenyApplicantTwo;
