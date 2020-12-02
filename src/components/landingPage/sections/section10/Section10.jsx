import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../sections.css';

const Section10 = () => {
    return (
        <div className="section-10">
            <Row>
                <Col>
                <h2><strong>Subscribe</strong></h2>
                <p>Sign up with your email address to receive news and updates.</p>
                </Col>
            </Row>
            <Row id="subscribe">
                <Col>
                    <Form>
                        <Row className="align-items-center">
                            <Col>
                                <Form.Control size="lg" placeholder="First name" />
                            </Col>
                            <Col>
                                <Form.Control size="lg" placeholder="Last name" />
                            </Col>
                            <Col>
                                <Form.Control size="lg" placeholder="Email" />
                            </Col>
                        </Row>
                    </Form>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button variant="dark" size="lg">Sign Up</Button>{' '}
                </Col>
            </Row>
        </div>
    )
}

export default Section10;
