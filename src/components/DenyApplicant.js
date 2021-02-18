import React from 'react';
import Navigation from './landingPage/navigation/Navigation';
import {Row,Form,Col,Button,Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const DenyApplicant = () => {

    return (
        <>
            <Navigation />
            <Form className="registrationForm">
            <Container className="orange form-header text-white header-center p-3 mb-3">
          <h4>Deny a Participant</h4>
          <h6> Quick Acknowledgements</h6>
        </Container>
                <span className="block border">I acknowledge that I will send an explanatory email to the participant I do not admit to the team
                </span>
                <span className="block border mt-1"><div><p className='mb-1'>I acknowledge that the only legitimate reasons to deny a participant are:</p>
                <ul>
                  <li>Your team is now full</li>
                  <li>Applicant's skills are not what you were looking for</li>
                   <li>You are awaiting for people you know to join your team</li>
                </ul>
                <p className='mb-1'>Applicant's XP shouldn't be a reason.</p></div>
                </span>
                        <Row className="text-center mt-2">
                          <Col lg={{ span: 6}}></Col>
                          <Col lg={{ span: 6}}>
                        <Button href="/DenyApplicantTwo" size="md" variant="warning" className="yellow text-dark team-select-button mx-auto">I agree</Button>
                        </Col>
                        </Row>
            </Form>
        </>
    )
}

export default DenyApplicant;
