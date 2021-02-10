import React from 'react';
import Navigation from './landingPage/navigation/Navigation.jsx';
import {Row,Col,Container,Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './landingPage/home.css';

const TeamArea = () => {

    return (
        <>
            <Navigation />
            <Container id="button-container" fluid>
                <Row className="text-center mb-1">
                    <Col lg={{ span: 6, offset: 3 }}>
                        <Button href="/TeamArea" className="home-button text-white yellow" variant="warning" size="lg">
                            Team Area
                        </Button>{' '}
                    </Col>
                </Row>
                <Row className="text-center mb-1">
                    <Col lg={{ span: 6, offset: 3 }}>
                        <Button href="/YourEqualithons" className="home-button cyan" variant="info" size="lg">
                            Your Equalithon
                        </Button>{' '}
                    </Col>
                </Row>
                <Row className="text-center mb-1">
                    <Col lg={{ span: 6, offset: 3 }}>
                        <Button href="/TeamStatus" className="home-button cyan" variant="info" size="lg">
                            Team Status
                        </Button>{' '}
                    </Col>
                </Row>
                <Row className="text-center mb-1">
                    <Col lg={{ span: 6, offset: 3 }}>
                        <Button href="/slack" className="home-button light-gray" variant="light" size="lg">
                            Mentor Updates & Standups
                        </Button>{' '}
                    </Col>
                </Row>
                <Row className="text-center mb-1">
                    <Col lg={{ span: 6, offset: 3 }}>
                        <Button href="/slack" className="home-button light-gray" variant="light" size="lg">
                            Your Solutions
                        </Button>{' '}
                    </Col>
                </Row>
                <Row className="text-center mb-1">
                    <Col lg={{ span: 6, offset: 3 }}>
                        <Button href="/slack" className="home-button light-gray" variant="light" size="lg">
                            Badges Earned
                        </Button>{' '}
                    </Col>
                </Row>
            </Container>
        </>

    )
}

export default TeamArea;
