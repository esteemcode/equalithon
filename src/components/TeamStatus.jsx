import {React} from 'react';
import Navigation from './landingPage/navigation/Navigation';
import {Link} from 'react-router-dom'
import {Row,Col,Form,Button,Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const TeamStatus = () => {

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

        <h6>Check out & build up your upcoming teams below:</h6>
                <Form.Group className="form-group">
                    <Form.Control required type="text" name="teamName" placeholder="Gender Equalithon" />
                </Form.Group>
                <Form.Group className="form-group">
                    <Form.Control required type="text" name="challenge" placeholder="March 2021" />
                </Form.Group>
                <Form.Group className="form-group">
                    <Form.Control required type="text" name="teamLead" placeholder="Nonprofit supported" />
                </Form.Group>
                <Form.Group className="form-group">
                    <Form.Control required type="text" name="status" placeholder="Sponsor A/B/C" />
                </Form.Group>
                <Form.Group name="teamDescription">
                    <Form.Control as="textarea" rows={3} placeholder="Description: Front end developer, Backend developer, UX-UI developer"
                />
                </Form.Group>
                <Row><p className="pr-2 ml-3 mb-0 pb-0">Lock fields </p> <Form.Check /></Row>

                <Row className="text-center mb-2">
                    <Col lg={{ span: 6}}>
                        <Button href="/select-location" size="md" variant="cyan" className="cyan text-white team-select-button">Invite people</Button>
                    </Col>
                    <Col lg={{ span: 6}}>
                        <Button href="/ValidateApplicant" size="md" variant="warning" className="yellow text-white team-select-button">Validate people</Button>
                    </Col>
                </Row>

                <br />
                <Form.Group className="form-group">
                    <Form.Control required type="text" name="teamName" placeholder="Gender Equalithon" />
                </Form.Group>
                <Form.Group className="form-group">
                    <Form.Control required type="text" name="challenge" placeholder="March 2021" />
                </Form.Group>
                <Form.Group className="form-group">
                    <Form.Control required type="text" name="teamLead" placeholder="Nonprofit supported" />
                </Form.Group>
                <Form.Group className="form-group">
                    <Form.Control required type="text" name="status" placeholder="Sponsor A/B/C" />
                </Form.Group>
                <Form.Group name="teamDescription">
                    <Form.Control as="textarea" rows={3} placeholder="Description: Front end developer, Backend developer, UX-UI developer"
                />
                </Form.Group>

                <Row className="mb-0 pb-0"><p className="pr-2 ml-3 mb-0 pb-0">Lock fields </p> <Form.Check /></Row>

                <Row className="text-center mb-2">
                    <Col lg={{ span: 6}}>
                        <Button href="/select-location" size="md" variant="cyan" className="cyan text-white team-select-button">Invite people</Button>
                    </Col>
                    <Col lg={{ span: 6}}>
                        <Button href="/ValidateApplicant" size="md" variant="warning" className="yellow text-white team-select-button">Validate people</Button>
                    </Col>
                </Row>

                <br />
            </Form>
        </>
    )
}

export default TeamStatus;
