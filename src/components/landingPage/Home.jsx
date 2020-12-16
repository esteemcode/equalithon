import React from 'react';
import Navigation from './navigation/Navigation';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './home.css';

const Home = () => {

    return (
        <>
            <Navigation />
            <Container id="button-container" fluid>
                <Row className="text-center">
                    <Col lg={{ span: 6, offset: 3 }}>
                        <Button className="home-button cyan" variant="info" size="lg">
                            Equalithon ＆ Team Selection
                        </Button>{' '}
                    </Col>
                </Row>
                <Row className="text-center">
                    <Col lg={{ span: 6, offset: 3 }}>
                        <Button className="home-button yellow" variant="warning" size="lg">
                            Team Area
                        </Button>{' '}
                    </Col>
                </Row>
                <Row className="text-center">
                    <Col lg={{ span: 6, offset: 3 }}>
                        <Button className="home-button dark-gray" variant="dark" size="lg">
                            Go to Slack
                        </Button>{' '}
                    </Col>
                </Row>
            </Container>
        </>
        
    )
}

export default Home;