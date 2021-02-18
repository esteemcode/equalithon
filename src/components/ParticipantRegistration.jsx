import { Container, Col, ListGroup, Row } from "react-bootstrap";
import { Link } from 'react-router-dom'
import Navigation from './landingPage/navigation/Navigation.jsx';

const ParticipantRegistration = () => {

    //this does not post to the correct row or column in the database
    const onSubmitHandler = async (e) => {
        try {
            const response = await fetch(
                "https://v1.nocodeapi.com/essteem/google_sheets/IgoNtzYsdlMmRjbd?tabId=profile",
            {
                method: "put",
                body: JSON.stringify({"row_id":22, "preasonforjoining":`${e}`}),
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const json = await response.json();
            console.log("Success:", JSON.stringify(json));
        } catch (error) {
            console.error("Error:", error);
        }
    }

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
                            <ListGroup.Item as="li" className="col-12 m-0 nav-list-item-w-hover-yellow mb-1 mt-1 border-top" onClick={() => onSubmitHandler("Hack in Equalithon")}>
                                <Link to="/home" className="a-inherit">
                                    Hack in Equalithons
                                </Link>
                                </ListGroup.Item>
                                <ListGroup.Item as="li" className="col-12 m-0 nav-list-item-w-hover-yellow mb-1 mt-1 border-top" onClick={() => onSubmitHandler("Boost my career")}>
                                    <Link to="/home" className="a-inherit">
                                        Boost my career
                                </Link>
                                </ListGroup.Item>
                                <ListGroup.Item as="li" className="col-12 m-0 nav-list-item-w-hover-yellow mb-1 mt-1 border-top" onClick={() => onSubmitHandler("Find a job")}>
                                    <Link to="/home" className="a-inherit">
                                        Find a job
                                </Link>
                                </ListGroup.Item>
                                <ListGroup.Item as="li" className="col-12 m-0 nav-list-item-w-hover-yellow mb-1 mt-1 border-top" onClick={() => onSubmitHandler("Help others find a job")}>
                                    <Link to="/home" className="a-inherit">
                                        Help others find a job
                                </Link>
                                </ListGroup.Item>
                                <ListGroup.Item as="li" className="col-12 m-0 nav-list-item-w-hover-yellow mb-1 mt-1 border-top" onClick={() => onSubmitHandler("Help Nonprofits")}>
                                    <Link to="/home" className="a-inherit">
                                        Help Nonprofits
                                </Link>
                                </ListGroup.Item>
                                <ListGroup.Item as="li" className="col-12 m-0 nav-list-item-w-hover-yellow mb-1 mt-1 border-top" onClick={() => onSubmitHandler("Support minorities in tech")}>
                                    <Link to="/home" className="a-inherit">
                                        Support minorities in tech
                                </Link>
                                </ListGroup.Item>
                                <ListGroup.Item as="li" className="col-12 m-0 nav-list-item-w-hover-yellow mb-1 mt-1 border-top" onClick={() => onSubmitHandler("I liked one specific Equalithon theme")}>
                                    <Link to="/home" className="a-inherit">
                                        I liked one specific Equalithon theme
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

export default ParticipantRegistration;
