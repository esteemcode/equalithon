import {React, Component} from 'react';
import Navigation from './landingPage/navigation/Navigation';
import {Row,Col,Form,Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class EqualithonSelection extends Component {
    constructor() {
        super();
        this.state = {
            equalithons: null,
            render: false
        }
    }

    componentDidMount() {
        fetch("https://v1.nocodeapi.com/essteem/google_sheets/IgoNtzYsdlMmRjbd?tabId=equalithon")
        .then(res => res.json())
        .then((result) => {
            this.setState({
                equalithons: result.data,
                render: true
            })
        })
    }

    render() {
        const {equalithons,render} = this.state

        return (
        <>
            <Navigation />
            <Button href="/home" size="lg" variant="info" className="cyan text-white home">Home</Button>
            <Form className="registrationForm">
                <h5 className="cyan form-header text-white p-3 mb-3">Equalithon ＆ Team Selection</h5>
                { equalithons && render ? (equalithons.map((each) => (
                    <div>
                    <Form.Group className="form-group">
                    <Form.Control type="text" name="ename" placeholder={each.ename} readOnly />
                </Form.Group>
                <Form.Group className="form-group">
                    <Form.Control type="text" name="edatestart" placeholder={each.edatestart} readOnly />
                </Form.Group>
                <Form.Group className="form-group">
                    <Form.Control type="text" name="edateend" placeholder={each.edateend} readOnly />
                </Form.Group>
                <Form.Group className="form-group">
                    <Form.Control type="text" name="enonprofit" placeholder={each.enonprofit} readOnly />
                </Form.Group>
                <Form.Group className="form-group">
                    <Form.Control type="text" name="esponsor" placeholder={each.esponsor || 'No Sponsor'} readOnly />
                </Form.Group>
                <Form.Group className="form-group">
                    <Form.Control as="textarea" name="edesc" rows={3} placeholder={each.edesc} readOnly />
                </Form.Group>
                <Form.Group name="teamDescription">
                    <Form.Control as="textarea" name="echallenge1" rows={3} placeholder={each.echallenge1} readOnly />
                </Form.Group>
                <Form.Group name="teamDescription">
                    <Form.Control as="textarea" name="echallenge2" rows={3} placeholder={each.echallenge2} readOnly />
                </Form.Group>
                <Form.Group name="teamDescription">
                    <Form.Control as="textarea" name="restofagenda" rows={3} placeholder={each.restofagenda} readOnly />
                </Form.Group>
                <Row className="text-center mt-3">
                    <Col lg={{ span: 6}}>
                        <Button href="/equalithon-info" size="lg" variant="info" className="cyan text-white team-select-button mx-auto">Learn More</Button>
                    </Col>
                    <Col lg={{ span: 6}}>
                        <Button href="/select-location" size="lg" variant="warning" className="yellow text-dark team-select-button mx-auto">Participate</Button>
                    </Col>
                </Row>
                <br></br>
                </div>))) : (<div />)}
            </Form>
        </>
        )
    }
}

export default EqualithonSelection;
