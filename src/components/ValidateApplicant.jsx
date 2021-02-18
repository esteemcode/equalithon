import {React} from 'react';
import Navigation from './landingPage/navigation/Navigation';
import {Link} from 'react-router-dom'
import {Row,Col,Form,Button,Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const ValidateApplicant = () => {

    return (
        <>
            <Navigation />
            <Form className="registrationForm">
            <Container className="yellow form-header text-white p-3 mb-2">
          <Link to="/TeamArea"><h5 className="text-white text-center">Back to Team Area</h5></Link>
        </Container>
            <Container className="cyan form-header text-white text-center p-3 mb-2">
          <h5>Team Status</h5>
        </Container>

        <h6>VALIDATE PEOPLE WHO WANT TO JOIN YOUR TEAM</h6>
        <h6>If no action is taken in 24h, they will be automatically accepted.</h6>

        <Container className="cyan form-header text-white">
          <h5 className="bold">GENDER EQUALITHON</h5>
        </Container>

                <Form.Group className="form-group">
                    <Form.Control required type="text" name="teamName" readOnly placeholder="Team 1" />
                </Form.Group>
                <Form.Group className="form-group">
                    <Form.Control required type="text" name="teamName" readOnly placeholder="Need: Front-end Developer"/>
                </Form.Group>
                <Form.Group className="form-group">
                    <Form.Control required type="text" name="teamName" readOnly placeholder="Applicant 1"/>
                </Form.Group>
                <Form.Group className="form-group">
                    <Form.Control required type="text" name="name" placeholder="Name" />
                </Form.Group>
                <Form.Group className="form-group">
                    <Form.Control required type="text" name="mainSkill" placeholder="Main skill: Front end developer" />
                </Form.Group>
                <Form.Group className="form-group">
                    <Form.Control required type="text" name="XPyears" placeholder="XP Years: 2" />
                </Form.Group>
                <Form.Group className="form-group">
                    <Form.Control required type="text" name="slackHandle" placeholder="Slack Handle" />
                </Form.Group>

                <Row className="text-center mb-2">
                    <Col lg={{ span: 6}}>
                        <Button href="/DenyApplicant" size="md" variant="light" className="medium-gray text-white team-select-button">Deny</Button>
                    </Col>
                    <Col lg={{ span: 6}}>
                        <Button href="/equalithon-selection" size="md" variant="warning" className="yellow text-white team-select-button">Validate Applicant</Button>
                    </Col>
                </Row>

                <br />
                <Form.Group className="form-group">
                    <Form.Control required type="text" name="teamName" readOnly placeholder="Applicant 2"/>
                </Form.Group>
                <Form.Group className="form-group">
                    <Form.Control required type="text" name="name" placeholder="Name" />
                </Form.Group>
                <Form.Group className="form-group">
                    <Form.Control required type="text" name="mainSkill" placeholder="Main skill: Front end developer" />
                </Form.Group>
                <Form.Group className="form-group">
                    <Form.Control required type="text" name="XPyears" placeholder="XP Years: 2" />
                </Form.Group>
                <Form.Group className="form-group">
                    <Form.Control required type="text" name="slackHandle" placeholder="Slack Handle" />
                </Form.Group>

                <Row className="text-center mb-2">
                    <Col lg={{ span: 6}}>
                        <Button href="/DenyApplicant" size="md" variant="light" className="medium-gray text-white team-select-button">Deny</Button>
                    </Col>
                    <Col lg={{ span: 6}}>
                        <Button href="/equalithon-selection" size="md" variant="warning" className="yellow text-white team-select-button">Validate Applicant</Button>
                    </Col>
                </Row>

                <br />

                <Form.Group className="form-group">
                    <Form.Control required type="text" name="teamName" readOnly placeholder="Need: Back-end Developer"/>
                </Form.Group>
                <Form.Group className="form-group">
                    <Form.Control required type="text" name="teamName" readOnly placeholder="Applicant 1"/>
                </Form.Group>
                <Form.Group className="form-group">
                    <Form.Control required type="text" name="name" placeholder="Name" />
                </Form.Group>
                <Form.Group className="form-group">
                    <Form.Control required type="text" name="mainSkill" placeholder="Main skill: Front end developer" />
                </Form.Group>
                <Form.Group className="form-group">
                    <Form.Control required type="text" name="XPyears" placeholder="XP Years: 2" />
                </Form.Group>
                <Form.Group className="form-group">
                    <Form.Control required type="text" name="slackHandle" placeholder="Slack Handle" />
                </Form.Group>

                <Row className="text-center mb-2">
                    <Col lg={{ span: 6}}>
                        <Button href="/DenyApplicant" size="md" variant="light" className="medium-gray text-white team-select-button">Deny</Button>
                    </Col>
                    <Col lg={{ span: 6}}>
                        <Button href="/equalithon-selection" size="md" variant="warning" className="yellow text-white team-select-button">Validate Applicant</Button>
                    </Col>
                </Row>

                <br />
            </Form>
        </>
    )
}

export default ValidateApplicant;
