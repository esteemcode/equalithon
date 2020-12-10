import { Row, Col, Container, ListGroup, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SponsorHome = () => {
    return (
        <Container>
            <Row>
                <Col lg={4} md={4} sm={4} xs={4}>
                    <Image src="https://dummyimage.com/100x50/000/fff" thumbnail />
                </Col>
                <Col lg={6} md={6} sm={6} xs={12}>
                    <ListGroup as="ul">
                        <Link>
                            <ListGroup.Item as="li" active>
                                Sponsor an Equalithon
                            </ListGroup.Item>
                        </Link>
                        <Link>
                            <ListGroup.Item as="li">
                                Equalithon Solution Space
                            </ListGroup.Item>
                        </Link>
                        <Link>
                            <ListGroup.Item as="li">
                                Share news about Equalithons
                            </ListGroup.Item>
                        </Link>
                        <Link>
                            <ListGroup.Item as="li">
                                Download participants resumes
                            </ListGroup.Item>
                        </Link>
                        <Link>
                            <ListGroup.Item as="li">
                                Invite Mentors
                            </ListGroup.Item>
                        </Link>
                    </ListGroup>
                </Col>
            </Row>
        </Container>
    )
}

export default SponsorHome;