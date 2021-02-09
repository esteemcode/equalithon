import {React} from 'react';
import Navigation from './landingPage/navigation/Navigation';
import {Link} from 'react-router-dom'
import {Row,Col,Form,Button,Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const YourEqualithons = () => {

    return (
        <>
            <Navigation />
            <Form className="registrationForm">
            <Container className="yellow form-header text-white p-3 mb-2">
          <Link to="/TeamArea"><h5 className="text-white text-center">Back to Team Area</h5></Link>
        </Container>
            <Container className="cyan form-header text-white text-center p-3 mb-2">
          <h5>Your Equalithons</h5>
        </Container>

        <h6>Check out your upcoming Equalithons below:</h6>

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
                <Row className="text-center mb-2">
                    <Col lg={{ span: 6}}>
                        <Button href="/equalithon-info" size="md" variant="light" className="medium-gray text-white team-select-button">Learn more</Button>
                    </Col>
                    <Col lg={{ span: 6}}>
                        <Button href="/select-location" size="md" variant="cyan" className="cyan text-white team-select-button">Check your team</Button>
                    </Col>
                </Row>
                <Button href="/TeamAcknowledgement" size="mg" variant="warning" className="yellow text-dark button-center" block>Create or join a Team</Button>

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
                <Row className="text-center mb-2">
                    <Col lg={{ span: 6}}>
                        <Button href="/equalithon-info" size="md" variant="light" className="medium-gray text-white team-select-button">Learn more</Button>
                    </Col>
                    <Col lg={{ span: 6}}>
                        <Button href="/select-location" size="md" variant="cyan" className="cyan text-white team-select-button">Check your team</Button>
                    </Col>
                </Row>
                <Button href="/TeamAcknowledgement" size="mg" variant="warning" className="yellow text-dark button-center" block>Create or join a Team</Button>

                <br />
            </Form>
        </>
    )
}

export default YourEqualithons;
