import React from 'react';
import Navigation from './navigation/Navigation';
import {Row,Col,Container,Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './home.css';

const Home = () => {

    return (
        <>
            <Navigation />
            <Container id="button-container" fluid>
                <Row className="text-center">
                    <Col lg={{ span: 6, offset: 3 }}>
                        <Button href="/equalithon-selection" className="home-button cyan" variant="info" size="lg">
                            Equalithon ＆ Team Selection
                        </Button>{' '}
                    </Col>
                </Row>
                <Row className="text-center">
                    <Col lg={{ span: 6, offset: 3 }}>
                        <Button href="/TeamArea" className="home-button yellow" variant="warning" size="lg">
                            Team Area
                        </Button>{' '}
                    </Col>
                </Row>
                <Row className="text-center">
                    <Col lg={{ span: 6, offset: 3 }}>
                        <Button href="/slack" className="home-button dark-gray" variant="dark" size="lg">
                            Go to Slack
                        </Button>{' '}
                    </Col>
                </Row>
                <Row className="text-center">
                    <Col lg={{ span: 6, offset: 3 }}>
                        <Button href="/YourAcclaim" className="home-button medium-gray" variant="light" size="lg">
                            Your Badges
                            </Button>{' '}
                            </Col>
                </Row>
                <Row className="text-center mb-1">
                    <Col lg={{ span: 6, offset: 3 }}>
                        <Button href="/slack" className="home-button light-gray font-light-gray" variant="light" size="lg">
                            Download your resume
                        </Button>{' '}
                    </Col>
                </Row>
                <Row className="text-center mb-1">
                    <Col lg={{ span: 6, offset: 3 }}>
                        <Button href="/slack" className="home-button light-gray font-light-gray" variant="light" size="lg">
                            Endorse other participants
                        </Button>{' '}
                    </Col>
                </Row>
                <Row className="text-center mb-1">
                    <Col lg={{ span: 6, offset: 3 }}>
                        <Button href="/slack" className="home-button light-gray font-light-gray" variant="light" size="lg">
                            Share news about Equalithons
                        </Button>{' '}
                    </Col>
                </Row>
            </Container>
        </>

    )
}

export default Home;
