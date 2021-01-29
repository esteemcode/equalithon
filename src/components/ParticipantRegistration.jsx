import { useState } from 'react';
import { Row, Col, Container, Form } from 'react-bootstrap';
import Navigation from './landingPage/navigation/Navigation';

const reasonsList = [
    { name: 'Hack in Equalithon', checked: true },
    { name: 'Boost my career', checked: false },
    { name: 'Find a job', checked: false },
    { name: 'Help others find a job', checked: false },
    { name: 'Help Nonprofits', checked: false },
    { name: 'Support minorities in tech', checked: false },
    { name: 'Liked one specific Equalithon theme', checked: false },
]

const ParticipantRegistration = () => {
    const [reasons, setReasons] = useState(reasonsList);
    const [isActive, setIsActive] = useState(0);

    const handleSetIsActive = (index) => {
        let newReasons = reasons;
        newReasons.forEach((el, currentIndex) => {
            if (currentIndex === index) {
                el.checked = true;
            } else {
                el.checked = false;
            }
        });
        setReasons(newReasons);
        setIsActive(index);
    }

    return (
        <>
        <Navigation />
                    <Container className="participantForm">
                    <Row className="justify-content-md-center">
					<Col lg={12} md={12} sm={12} xs={12}>
                    <Form>
                    <Row className="cyan form-header text-white pt-1 pb-1 col-12 mt-0 ml-0 mr-0 mb-3">
						    <Row className="m-0 col-12 pl-0 pr-0 pt-2 pb-0">
						    	<h4>Welcome to Essteem</h4>
						    </Row>
						    <Row className="m-0 col-12 pl-0 pr-0 pt-0 pb-1">
						    	<h6>Please select your primary reason for joining</h6>
						    </Row>
					    </Row>
                        {
                            reasons.map((item, index) => {
                                return (

                                        <div
                                        className="border btn btn-block rounded p-2 my-1"
                                        style={index === isActive ? { backgroundColor: '#fde026' } : null}
                                        defaultChecked={item.checked}
                                        onClick={() => handleSetIsActive(index)}
                                        > {item.name}</div>

                                )
                            })
                        }
                        </Form>
                        </Col>
                        </Row>
                    </Container>
                        </>
    )
}

export default ParticipantRegistration;
