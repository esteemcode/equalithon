import React from 'react';
import Navigation from './landingPage/navigation/Navigation.jsx';
import { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './landingPage/home.css';

const goalsList = [
    { name: 'Increase your cash flow', checked: true },
    { name: 'Boost you brand', checked: false },
    { name: 'Build up D&I skills', checked: false },
    { name: 'Network with Ambassadors', checked: false },
    { name: 'Diversify you business', checked: false },
    { name: 'Other - provide details', checked: false },
]

const DAndIRegistration = () => {
    const [goals, setGoals] = useState(goalsList);
    const [selectedGoal, setSelectedGoal] = useState(0);

    const handleSetChecked = (index) => {
        let newGoals = goals;
        newGoals.forEach((el, currentIndex) => {
            if (currentIndex === index) {
                el.checked = true;
            } else {
                el.checked = false;
            }
        });
        setGoals(newGoals);
        setSelectedGoal(index);
    }

    return (
        <>
        <Navigation />
        <Container className="registrationForm">
            <Row className="justify-content-md-center">
                <Col lg={12} md={12} sm={12} xs={12}>
                    <Container className="justify-content-md-center" style={{ backgroundColor: '#36b3a8', color: '#fff' }} >
                        <h3>Welcome to Essteem</h3>
                        <p>Please select from the following options</p>
                    </Container>
                    <Form>
                        {
                            goals.map((item, index) => {
                                return (
                                    <Form.Check
                                        className="radio-button__hidden"
                                        style={index === selectedGoal ? { backgroundColor: '#fde026' } : null}
                                        key={index}
                                        defaultChecked={item.checked}
                                        name={`goals`}
                                        type={`radio`}
                                        label={item.name}
                                        id={`radio-${index}`}
                                        onClick={() => handleSetChecked(index)}
                                    />
                                )
                            })
                        }
                        <Button
                            type="submit"
                            variant="primary"
                            size="lg" block>
                            Next
                        </Button>
                    </Form>
                </Col>

            </Row>
        </Container>
        </>
    )
}

export default DAndIRegistration;
