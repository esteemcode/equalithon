import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import sponsors from './sponsors.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../sections.css';

const Section4 = () => {
    return (
        <Row className="section-4">
            <Col className="sec-4-col-1 align-self-center">
                <div>
                    <h2><strong>Nonprofit Partners</strong></h2>
                    <p><strong>Main Nonprofit Partners </strong>focus on services for Women, People of Color, or LGBTQ. They co-organize Equalithons with Essteem. 5% to 20% of an Equalithon’s revenues will be given to them.</p>
                    <p><strong>Nonprofit Partners</strong> provide Sponsors with challenges that relate either to Gender Equality or to their own tech challenges, which Equalithon participants attempt to solve.</p>
                </div>
            </Col>
            <Col>
                <Image src={sponsors} width="600px" alt="sponsor logos" fluid></Image>
            </Col>
        </Row>
    )
}
    
    export default Section4;