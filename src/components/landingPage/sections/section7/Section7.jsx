import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../sections.css';

const Section7 = () => {
    return (
        <div className="section-7">
            <Row>
                <Col>
                    <h2><strong>Past Equalithon Examples</strong></h2>
                </Col>
            </Row>
            <Row>
                <Col>
                    <iframe title="gender" width="377" height="212" src="https://www.youtube.com/embed/AQFofw9yBHk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <div className="p-3">
                        <h3 className="mb-3"><strong>#GENDER</strong></h3>    
                        <p>It all begins with the first Equalithon, supported by Nasdaq and Capital One. This wasn’t our product at the time, but people liked it so we pivoted and made it our core.</p>
                    </div>
                </Col>
                <Col>
                    <iframe title="covid19" width="377" height="212" src="https://www.youtube.com/embed/goTk9pjptrU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <div className="p-3">
                        <h3 className="mb-3"><strong>#COVID-19</strong></h3>
                        <p>Fast forward to March 2020, we thought the community  would like to support Nonprofits on the field get tech to add a brick to solutions to solve the situation. Great impact, we all loved to do it; now, Equalithons are not only for Gender Equality, but other issues.</p>
                    </div>
                </Col>
                <Col>
                    <iframe title="blm" width="377" height="212" src="https://www.youtube.com/embed/New6buexPeQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <div className="p-3">
                        <h3 className="mb-3"><strong>#BLM</strong></h3>
                        <p>It’s 2020, so things go wrong. In July, we launched a Justice for #Blacklives Equalithon. The winning app enables people to participate to protests without being at risk of COVID-19. We also support the Martin Luther King Center for Nonviolence.</p>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col className="m-5">
                    <Button variant="dark" size="lg">Join and Hack</Button>{' '}
                </Col>
            </Row>
        </div>
    )
}

export default Section7;
