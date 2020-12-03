import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../sections.css';

const Section5 = () => {
    return (
        <div className="section-5">
            <Row>
                <Col className="sec-5-cols">
                    <h1><strong>Why Participate</strong></h1>
                </Col>
            </Row>
            <Row>
                <Col className="sec-5-cols">
                    <h2>Code</h2>
                    <p>Experience working on a team and crediting contributors. Prove your tech and managerial  skills.</p>
                </Col>
                <Col className="sec-5-cols">
                    <h2>Connect</h2>
                    <p>Network with engineers and HR from your area or remotely through teams.</p>
                </Col>
                <Col className="sec-5-cols">
                    <h2>Impact</h2>
                    <p>Experience supporting the community, endorsing peers, mentoring and influencing.</p>
                </Col>
                <Col className="sec-5-cols">
                    <h2>Grow</h2>
                    <p>Get exposure to sponsor organizations and get into their talent pools or get hired.</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button variant="warning" size="lg">Register</Button>{' '}
                </Col>
            </Row>
        </div>
    )
}

export default Section5;
