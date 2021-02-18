import React from 'react';
import Navigation from './landingPage/navigation/Navigation';
import {Row,Form,Col,Button,Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const TeamAcknowledgement = () => {

    return (
        <>
            <Navigation />
            <Form className="registrationForm">
            <Container className="cyan form-header text-white header-center p-3 mb-3">
          <h4> Create a Team</h4>
          <h6> Quick Acknowledgements</h6>
        </Container>
                <span className="block border">I acknowledge that I will make myself available for others, organize calls including standups with mentors, update my team's informaiton on this app, and validate new team members.
                </span>
                <span className="block border mt-1">I acknowledge that I have over 2 years of experience either in tech or project management or in development, or that I can quickly learn a no-code tool to develop a functional application in case there is no developer joining my team.</span>
                <Row className="text-center mt-2">
                    <Col lg={{ span: 6}}></Col>
                    <Col lg={{ span: 6}}>
                <Button href="/createteam" size="md" variant="warning" className="yellow text-dark team-select-button mx-auto">I agree</Button>
                </Col>
                </Row>
            </Form>
        </>
    )
}

export default TeamAcknowledgement;
