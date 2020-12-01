import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../sections.css';

const Section9 = () => {
    return (
        <div className="section-9">
            <Row>
                <Col>
                    <h2><strong>Proud of your talent.</strong></h2>
                    <p>We support your talent brand through dedicated tips, coaching and videos.</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <iframe className="m-3" title="software and mechanical engineer" width="583" height="328" src="https://www.youtube.com/embed/N4tQ8-0XGbY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <iframe className="m-3" title="fullstack developer" width="583" height="328" src="https://www.youtube.com/embed/eq8N1FhBRVk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </Col>
            </Row>
        </div>
    )
}

export default Section9;
