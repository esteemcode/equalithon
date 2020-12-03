import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navigation from './navigation/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../sections.css';

const Section1 = () => {
    return (
        <Row className="section-1">
            <Col>
            <div className="hero">
                <Navigation />
                <div className="hero-header">
                    <h1><strong>Hack Gender Equality</strong></h1>
                </div>
            </div>
            </Col>
        </Row>
    )
        
}

export default Section1;