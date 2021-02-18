import React from 'react';
import Navigation from './landingPage/navigation/Navigation';
import {Row,Col,Button,Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './landingPage/home.css';

const YourAcclaim = () => {

    return (
        <>
            <Navigation />
            <Container id="button-container" fluid>
                <Row className="text-center">
                    <Col lg={{ span: 6, offset: 3 }}>
                        <a href="https://www.youracclaim.com/" target="_blank" rel="noreferrer">
                          <Button className="cyan" variant="info" size="lg">
                        Sign into Your Acclaim
                        </Button>
                        </a>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default YourAcclaim;
