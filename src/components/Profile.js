import React, { useState } from "react";
import Navigation from "./landingPage/navigation/Navigation";
import Country from "./CountryRegionComponent";
import { Card, Button, Row, Col, Form } from "react-bootstrap";

const Profile = () => {
  const [ data, setData ] = useState({
    firstName: "First Name",
    lastName: "",
    email: "",
    newPassword: "",
    oldPassword: "",
    confirmNewPassword: "",
    slackHandle: "",
    linkedIn: "",
    currentJob: "",

})

const { firstName, lastName, email, newPassword, oldPassword, confirmNewPassword } = data;

const onChangeHandler = e => {
    setData({
        ...data,
        [e.target.name]: e.target.value
    });
}

  return (
    <div>
      <Navigation />
      <div className="registrationForm mb-4">
      <Row className="text-center" >
        <Col sm={9}>
        <div className="cyan form-header text-center text-white p-3 mb-2">
          <h5>Profile Information</h5>
        </div>
        </Col>
        <Col sm={3}>
        <div className="yellow form-header text-white text-center p-3 mb-2">
          <h5>Edit</h5>
        </div>
        </Col>
        </Row>

        <Card className="mt-3">
          <Card.Header>Personal Information</Card.Header>

          <Card.Body>
          <Form>
                <Form.Group className="form-group">
                    <Form.Control required type="text" name="firstName" placeholder="First Name" onChange={onChangeHandler} />
                </Form.Group>
                <Form.Group className="form-group">
                    <Form.Control required type="text" name="lastName" placeholder="Last Name" onChange={onChangeHandler} />
                </Form.Group>
                <Form.Group className="form-group">
                    <Form.Control required type="email" placeholder="E-mail" name="email" onChange={onChangeHandler} />
                </Form.Group>
                <Form.Group className="form-group">
                    <Form.Control required type="slackHandle" placeholder="Slack Handle" name="slackHandle" onChange={onChangeHandler} />
                </Form.Group>
                <Form.Group className="form-group">
                    <Form.Control required type="oldPassword" minLength="6" maxLength="8" size="8" placeholder="Old Password" name="oldPassword" onChange={onChangeHandler} />
                </Form.Group>
                <Form.Group className="form-group">
                    <Form.Control required type="newPassword" minLength="6" maxLength="8" size="8" placeholder="New Password" name="newPassword" onChange={onChangeHandler} />
                </Form.Group>
                <Form.Group className="form-group">
                    <Form.Control required type="confirmNewPassword" minLength="6" maxLength="8" size="8" placeholder="Confirm password" name="confirmNewPassword" onChange={onChangeHandler} />
                </Form.Group>
                {data.password !== data.confirmPassword ? (
                    <span className="text-danger small">Passwords don't match.</span>
                ) : null}
                </Form>
          </Card.Body>
        </Card>

        <Card className="mt-3">
          <Card.Header>Geographic Information</Card.Header>

          <Card.Body>
          <Form>
					<Form.Group className="form-group">
						<Form.Label>Country</Form.Label>
						<Country />
						</Form.Group>
					<Form.Group className="form-group">
						<Form.Control
							required
							type="text"
							name="city"
							placeholder="City"
						/>
					</Form.Group>
					<Form.Group className="form-group">
						<Form.Control required type="text" name="postcode" placeholder="Postcode" />
					</Form.Group>
                </Form>
          </Card.Body>
        </Card>

        <Card className="mt-3">
          <Card.Header>Work Information</Card.Header>

          <Card.Body>
          <Form>
                <Form.Group className="form-group">
                    <Form.Control required type="text" name="firstName" placeholder="First Name" onChange={onChangeHandler} />
                </Form.Group>
                <Form.Group className="form-group">
                    <Form.Control required type="text" name="lastName" placeholder="Last Name" onChange={onChangeHandler} />
                </Form.Group>
                <Form.Group className="form-group">
                    <Form.Control required type="email" placeholder="E-mail" name="email" onChange={onChangeHandler} />
                </Form.Group>
                <Form.Group className="form-group">
                    <Form.Control required type="slackHandle" placeholder="Slack Handle" name="slackHandle" onChange={onChangeHandler} />
                </Form.Group>
                <Form.Group className="form-group">
                    <Form.Control required type="oldPassword" minLength="6" maxLength="8" size="8" placeholder="Old Password" name="oldPassword" onChange={onChangeHandler} />
                </Form.Group>
                <Form.Group className="form-group">
                    <Form.Control required type="newPassword" minLength="6" maxLength="8" size="8" placeholder="New Password" name="newPassword" onChange={onChangeHandler} />
                </Form.Group>
                <Form.Group className="form-group">
                    <Form.Control required type="confirmNewPassword" minLength="6" maxLength="8" size="8" placeholder="Confirm password" name="confirmNewPassword" onChange={onChangeHandler} />
                </Form.Group>
                {data.password !== data.confirmPassword ? (
                    <span className="text-danger small">Passwords don't match.</span>
                ) : null}
                </Form>
          </Card.Body>
        </Card>

        <Button
          href="./group-registration"
          variant="warning"
          className="next yellow text-dark float-right mt-3"
          type="submit"
        >
          Next
        </Button>
        <Button
          href="./group-registration"
          className="btn btn-light text-dark mt-3"
          type="submit"
        >
          Skip
        </Button>
      </div>
      </div>
  );
};

export default Profile;
