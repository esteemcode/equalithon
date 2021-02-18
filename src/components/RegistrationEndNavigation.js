import { Container, Col, ListGroup, Row } from "react-bootstrap";
import { Link } from 'react-router-dom'
import Navigation from './landingPage/navigation/Navigation.jsx';

const RegistrationEndNavigation = () => {
    return (
        <>
        <Navigation />
        <br></br>
        <Container className="w-40">
            <Row className="justify-content-md-center">
                <Col lg={6} md={6} sm={6} xs={12}>
                    <Row className="cyan form-header text-white pt-1 pb-1 col-12 mt-0 ml-0 mr-0 mb-2">
                        <Row className="m-0 col-12 pl-0 pr-0 pt-2 pb-0">
                            <h4>Thanks!</h4>
                        </Row>
                        <Row className="m-0 col-12 pl-0 pr-0 pt-0 pb-1">
                            <h6>Please select among the following options</h6>
                        </Row>
                    </Row>
                    <Row className="w-100 m-0">
                        <ListGroup as="ul" className="w-100 m-0">
                            <ListGroup.Item as="li" className="col-12 m-0 nav-list-item-w-hover-yellow mb-1 mt-1 border-top">
                                <Link to="/Participant-Registration" className="a-inherit">
                                    I want to participate in an Equalithon
                            </Link>
                            </ListGroup.Item>
                            <ListGroup.Item as="li" className="col-12 m-0 nav-list-item-w-hover-yellow mb-1 mt-1 border-top">
                                <Link to="/Participant-Registration" className="a-inherit">
                                    I want to mentor an Equalithon
                            </Link>
                            </ListGroup.Item>
                            <ListGroup.Item as="li" className="col-12 m-0 nav-list-item-w-hover-yellow mb-1 mt-1 border-top">
                                <Link to="/Participant-Registration" className="a-inherit">
                                    I am a community manager
                            </Link>
                            </ListGroup.Item>
                        </ListGroup>
                    </Row>
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default RegistrationEndNavigation;
