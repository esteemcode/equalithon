import React from 'react';
import Navigation from './landingPage/navigation/Navigation';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './landingPage/home.css';

const Slack = () => {

    return (
        <>
            <Navigation />
            <Container id="button-container" fluid>
                <Row className="text-center">
                    <Col lg={{ span: 6, offset: 3 }}>
                        <Button className="home-button yellow" variant="warning" size="lg">
                            Slack Login
                        </Button>{' '}
                    </Col>
                </Row>
            </Container>
        </>

    )
}

export default Slack;
