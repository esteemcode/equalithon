import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import nasdaq from './nasdaq.jpeg';
import capOne from './capOne.png';
import objective from './objective_logo_black.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../sections.css';

const Section6 = () => {
    return (
        <div className="section-6">
            <Row>
                <Col>
                    <h2><strong>Past Equalithon Sponsors</strong></h2>
                </Col>
            </Row>
            <Row className="align-items-center px-1">
                <Col>
                    <Image src={nasdaq} width="200px" alt="nasdaq logo" fluid></Image>
                </Col>
                <Col>
                    <Image src={capOne} width="200px" alt="capital one logo" fluid></Image>
                </Col>
                <Col>
                    <Image src={objective} width="200px" alt="objective logo" fluid></Image>
                </Col>
            </Row>
        </div>
    )
}

export default Section6;
