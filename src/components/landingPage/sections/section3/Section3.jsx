import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import women from './women-1209678.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../sections.css';

const Section3 = () => {
    return (
        <Row className="section-3">
            <Col>
                <Image src={women} width="600px" alt="two women at computer" fluid></Image>
            </Col>
            <Col className="sec-3-col-2 align-self-center">
                <div>
                    <h2><strong>Equalithons</strong></h2>
                    <p>Hack, showcase your skills, network with hiring managers, mentors and peers, learn, and give back to the community!</p>
                    <p>You can earn a prize, may be added to talent pools or hired by Sponsors with a reputation for inclusion.</p>
                </div>
            </Col>
        </Row>
    )
}
    
    export default Section3;