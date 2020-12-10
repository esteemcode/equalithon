import { useState } from 'react';
import { Container, Form, Button, Col, Row } from 'react-bootstrap';

const goalsList = [
    { name: 'Improve your Employers brand', checked: true },
    { name: 'Recruit diverse profiles', checked: false },
    { name: 'Improve your inclusiveness', checked: false },
    { name: 'Give back to the Women community', checked: false },
    { name: 'Other - provide details', checked: false },
]

const Sponsorship = () => {
    const [goals, setGoals] = useState(goalsList);
    const [selectedGoal, setSelectedGoal] = useState(0);
    const [brandName, setBrandName] = useState('');
    const [logo, setLogo] = useState('');
    const [companyDescription, setCompanyDescription] = useState('');
    const [companyMission, setCompanyMission] = useState('');
    const [goalsSelected, setGoalsSelected] = useState(false);

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

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const formData = {
            goal: goals[selectedGoal].name,
            brandName: brandName,
            logo: logo,
            description: companyDescription,
            mission: companyMission
        }
        console.log(formData);
        console.log('form submitted');
    }

    return (
        <Container className="justify-content-md-center">
            <Row className="justify-content-md-center">
                <Col lg={4} md={6} s={10} xs={12}>
                    <Form onSubmit={handleFormSubmit}>
                        {
                            !goalsSelected ? (
                                <>
                                    <Container className="justify-content-md-center" style={{ backgroundColor: '#36b3a8', color: '#fff' }} >
                                        <h3>Welcome to Essteem</h3>
                                        <p>Please select your primary goal with Essteem</p>
                                    </Container>
                                    {
                                        goals.map((item, index) => {
                                            return (
                                                <Form.Check
                                                    style={index === selectedGoal ? { backgroundColor: '#fde026' } : null}
                                                    className="radio-button__hidden"
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
                                        onClick={() =>
                                            setGoalsSelected(true)}
                                        type="submit"
                                        variant="primary"
                                        size="lg" block>
                                        Next
                                </Button>
                                </>
                            ) : (
                                    <>
                                        <Container className="justify-content-md-center" style={{ backgroundColor: '#36b3a8', color: '#fff' }} >
                                            <h3>Create a space for your company</h3>
                                        </Container>
                                        <Form.Group>
                                            <Form.Control type="text" placeholder="Employer's brand name" value={brandName} onChange={(e) => setBrandName(e.target.value)} required />
                                        </Form.Group>
                                        <Form.Group>
                                            <Form.Control type="text" placeholder="Upload logo" value={logo} onChange={(e) => setLogo(e.target.value)} required />
                                        </Form.Group>
                                        <Form.Group>
                                            <Form.Control as="textarea" placeholder="Describe your company" value={companyDescription} onChange={(e) => setCompanyDescription(e.target.value)} required />
                                        </Form.Group>
                                        <Form.Group>
                                            <Form.Control as="textarea" placeholder="Describe what you do for women" value={companyMission} onChange={(e) => setCompanyMission(e.target.value)} />
                                        </Form.Group>
                                        <Button
                                            type="submit"
                                            variant="primary"
                                            size="lg" block>
                                            Next
                                </Button>
                                    </>
                                )
                        }
                    </Form>
                </Col>
            </Row>

        </Container>
    )
}

export default Sponsorship;