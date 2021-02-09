import {React, useState} from 'react';
import Navigation from './landingPage/navigation/Navigation';
import {Row,Col,Form,Button,Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const JoinTeam = () => {
    const [teamButton, setTeamButton] = useState(true)

    const [request, setRequest] = useState(true)

    const onRequestClick = () => {
        setRequest(!request)
        setTeamButton(!teamButton)
    }

    const [request2, setRequest2] = useState(true)

    const onRequestClick2 = () => {
        setRequest2(!request2)
        setTeamButton(!teamButton)
    }

    const [request3, setRequest3] = useState(true)

    const onRequestClick3 = () => {
        setRequest3(!request3)
        setTeamButton(!teamButton)
    }

    const [request4, setRequest4] = useState(true)

    const onRequestClick4 = () => {
        setRequest4(!request4)
        setTeamButton(!teamButton)
    }

    return (
        <>
            <Navigation />
            <Button href="/home" size="md" variant="info" className="cyan text-white home">Home</Button>
            { teamButton ? (<div />) : (<Button href="/teamArea" size="md" variant="info" className="cyan text-white team-selection">Team Area</Button>)}
            <Form className="registrationForm">
            <Container className="cyan form-header text-white p-3 mb-3">
          <h4> You Are Registered!</h4>
          <h6> Time to Join or Create a Team</h6>
        </Container>

        <h6 className="cyan-text">You can also wait to be recruited by, or assigned to a team.</h6>
        <Button href="/TeamAcknowledgement" size="lg" variant="warning" className="yellow text-dark button-center" block>Create a Team</Button>
        <h6 className="cyan-text">or join one below</h6>

                <Form.Group className="form-group">
                    <Form.Control required type="text" name="teamName" placeholder="Team 1 - No Name yet" />
                </Form.Group>
                <Form.Group className="form-group">
                    <Form.Control required type="text" name="challenge" placeholder="Challenge selected: Challenge 1" />
                </Form.Group>
                <Form.Group className="form-group">
                    <Form.Control required type="text" name="teamLead" placeholder="Team lead: @Slack Handle Name" />
                </Form.Group>
                <Form.Group className="form-group">
                    <Form.Control required type="text" name="status" placeholder="Status: looking for members" />
                </Form.Group>
                <Form.Group name="teamDescription">
                    <Form.Control as="textarea" rows={3} placeholder="Need: Front end developer, Backend developer, UX-UI developer"
                />
                </Form.Group>
                <Container>
                <Row>
                <Col md={8}></Col>
                    <Col md={4}>
                        <Row className="float-right mt-2">
                        {request ? (<Button href="" size="sm" variant="warning" className="yellow text-dark" onClick={() => onRequestClick()}>Request to Join</Button>) : (<Button href="" size="sm" variant="secondary" className="gray text-light" onClick={() => onRequestClick()}>Requested</Button>)}
                        </Row>
                        <Row className="float-right mt-2">
                        {request2 ? (<Button href="" size="sm" variant="warning" className="yellow text-dark" onClick={() => onRequestClick2()}>Request to Join as a Mentor</Button>) : (<Button href="" size="sm" variant="secondary" className="gray text-light" onClick={() => onRequestClick2()}>Requested</Button>)}
                        </Row>
                        </Col>
                </Row>
                </Container>
                <br />
                <Form.Group className="form-group">
                    <Form.Control required type="text" name="teamName" placeholder="Equalizers" />
                </Form.Group>
                <Form.Group className="form-group">
                    <Form.Control required type="text" name="challenge" placeholder="Challenge selected: Challenge 2" />
                </Form.Group>
                <Form.Group className="form-group">
                    <Form.Control required type="text" name="teamLead" placeholder="Team lead: @Slack Handle Name" />
                </Form.Group>
                <Form.Group className="form-group">
                    <Form.Control required type="text" name="status" placeholder="Status: looking for members" />
                </Form.Group>
                <Form.Group name="teamDescription">
                    <Form.Control as="textarea" rows={3} placeholder="Need: Front end developer, Backend developer, UX-UI developer"
                />
                </Form.Group>
                <Container>
                    <Row>
                <Col md={8}></Col>
                    <Col md={4}>
                        <Row className="float-right mt-2">
                        {request3 ? (<Button href="" size="sm" variant="warning" className="yellow text-dark" onClick={() => onRequestClick3()}>Request to Join</Button>) : (<Button href="" size="sm" variant="secondary" className="gray text-light" onClick={() => onRequestClick3()}>Requested</Button>)}
                        </Row>
                        <Row className="float-right mt-2">
                        {request4 ? (<Button href="" size="sm" variant="warning" className="yellow text-dark" onClick={() => onRequestClick4()}>Request to Join as a Mentor</Button>) : (<Button href="" size="sm" variant="secondary" className="gray text-light" onClick={() => onRequestClick4()}>Requested</Button>)}
                        </Row>
                        </Col>
                </Row>
                </Container>
            </Form>
        </>
    )
}

export default JoinTeam;
