import React from 'react';
import Navigation from './landingPage/navigation/Navigation';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './landingPage/home.css';

const Slack = () => {

    return (
        <>
            <Navigation />
            <Container id="button-container" fluid>
                <Row className="text-center">
                    <Col lg={{ span: 6, offset: 3 }}>
                        <a href="https://slack.com/oauth/v2/authorize?user_scope=identity.basic&client_id=644264530166.1669396453041&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fslack%2Fauth%2F"><img alt="Sign in with Slack" height="40" width="172" src="https://platform.slack-edge.com/img/sign_in_with_slack.png" srcset="https://platform.slack-edge.com/img/sign_in_with_slack.png 1x, https://platform.slack-edge.com/img/sign_in_with_slack@2x.png 2x" /></a>
                    </Col>
                </Row>
            </Container>
        </>

    )
}

export default Slack;
