import { Row, Col, Container, ListGroup, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SponsorHome = () => {
    return (
        <Container>
            <Row>
                <Col lg={4} md={4} sm={4} xs={4}>
                    <Row>
                        <Image src="https://dummyimage.com/100x50/000/fff" thumbnail />
                    </Row>
                </Col>
                <Col lg={6} md={6} sm={6} xs={12}>
                    <Row className="justify-content-md-center">
                        <Col lg={12} md={12} sm={12} xs={12}>
                            <Row className="w-100 m-0">
                                <ListGroup as="ul" className="w-100 m-0">
                                    <ListGroup.Item as="li" className="col-12 m-0 nav-list-item-w-hover-cyan mb-1 mt-1">
                                        <Link className="a-inherit">
                                            Sponsor an Equalithon
                                        </Link>
                                    </ListGroup.Item>
                                    <ListGroup.Item as="li" className="col-12 m-0 nav-list-item-w-hover-cyan mb-1 mt-1 border-top">
                                        <Link className="a-inherit">
                                            Equalithon Solution Space
                                        </Link>
                                    </ListGroup.Item>
                                    <ListGroup.Item as="li" className="col-12 m-0 nav-list-item-w-hover-cyan mb-1 mt-1 border-top">
                                        <Link className="a-inherit">
                                            Share news about Equalithons
                                        </Link>
                                    </ListGroup.Item>
                                    <ListGroup.Item as="li" className="col-12 m-0 nav-list-item-w-hover-cyan mb-1 mt-1 border-top">
                                        <Link className="a-inherit">
                                            Download participants resumes
                                        </Link>
                                    </ListGroup.Item>
                                    <ListGroup.Item as="li" className="col-12 m-0 nav-list-item-w-hover-cyan mb-1 mt-1 border-top">
                                        <Link className="a-inherit">
                                            Invite Mentors
                                        </Link>
                                    </ListGroup.Item>
                                </ListGroup>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default SponsorHome;