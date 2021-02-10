import React from 'react';
import Navigation from './landingPage/navigation/Navigation';
import Container from 'react-bootstrap/Container';
import {Row,Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './landingPage/home.css';

const Slack = () => {

    return (
        <>
            <Navigation />
            <Container id="button-container" fluid>
                <Row className="text-center">
                    <Col lg={{ span: 6, offset: 3 }}>
                        <a href="https://essteem-members.slack.com/?redir=%25252Foauth%25253Fclient_id%25253D644264530166.1669396453041%252526scope%25253D%252526user_scope%25253Didentity.basic%252526redirect_uri%25253Dhttps%2525253A%2525252F%2525252Fessteem-members.slack.com%2525252F%2525253Fredir%2525253D%2525252Foauth%2525253Fclient_id%2525253D644264530166.1669396453041%25252526scope%2525253D%25252526user_scope%2525253Didentity.basic%25252526redirect_uri%2525253Dhttps%252525253A%252525252F%252525252Fessteem-members.slack.com%252525252F%252525253Fredir%252525253D%252525252Foauth%252525253Fclient_id%252525253D644264530166.1669396453041%2525252526scope%252525253D%2525252526user_scope%252525253Didentity.basic%2525252526redirect_uri%252525253Dhttps%25252525253A%25252525252F%25252525252Fslack.com%25252525252Fapp_redirect%25252525253Fchannel%25252525253Dequalithon%2525252526state%252525253D%2525252526granular_bot_scope%252525253D1%2525252526single_channel%252525253D0%2525252526install_redirect%252525253D%2525252526tracked%252525253D1%2525252526team%252525253Dessteem-members%25252526state%2525253D%25252526granular_bot_scope%2525253D1%25252526single_channel%2525253D0%25252526install_redirect%2525253D%25252526tracked%2525253D1%25252526team%2525253Dessteem-members%252526state%25253D%252526granular_bot_scope%25253D1%252526single_channel%25253D0%252526install_redirect%25253D%252526tracked%25253D1%252526team%25253DTJY7SFL4W" target="_blank" rel="noreferrer">
                        <img alt="Sign in with Slack" height="40" width="172" src="https://platform.slack-edge.com/img/sign_in_with_slack.png" srcset="https://platform.slack-edge.com/img/sign_in_with_slack.png 1x, https://platform.slack-edge.com/img/sign_in_with_slack@2x.png 2x" />
                        </a>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Slack;
