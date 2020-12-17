import { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
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
        <div className="m-auto pt-3 col-4">
                    <div className="border">
                    <div className="cyan form-header text-white p-2" >
                        <h3>Welcome to Essteem</h3>
                        <p>Please select your primary reason for joining</p>
                        </div>
                    <Container className="my-4">
                    <Form>
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
                    </Container>
                    
                    </div>
                    </div>
                    </>
    )
}

export default ParticipantRegistration;