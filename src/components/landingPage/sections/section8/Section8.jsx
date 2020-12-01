import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import covid from './covid-fake-news.jpeg';
import butterfly from './butterfly.png';
import traid from './traid.jpg';
import elevate from './elevate.png';
import protest from './protest-away.png';
import faire from './fairE.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../sections.css';

const Section8 = () => {
    return (
        <div className="section-8">
            <Row>
                <Col>
                    <h2><strong>Discover Past Laureate Apps Created During Equalithons</strong></h2>
                </Col>
            </Row>
            <Row>
                <Col className="md='auto'">
                    <img className="m-3" src={covid} width="377px" height="230px" alt="covid-fake-news app" />
                    <img className="m-3" src={butterfly} width="377px" height="230px" alt="butterfly app" />
                    <img className="m-3" src={traid} width="377px" height="230px" alt="traid app" />
                </Col>
            </Row>
            <Row>
                <Col className="md='auto'">
                    <img className="m-3" src={elevate} width="377px" height="230px" alt="elevate app" />
                    <img className="m-3" src={protest} width="377px" height="230px" alt="protest app" />
                    <img className="m-3" src={faire} width="377px" height="230px" alt="faire app" />
                </Col>
            </Row>
        </div>
    )
}

export default Section8;