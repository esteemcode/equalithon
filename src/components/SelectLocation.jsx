/** @format */

import React, { Component } from "react";
import Navigation from './landingPage/navigation/Navigation';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import "bootstrap/dist/css/bootstrap.min.css";
import Countries from "./Countries";
import States from "./USAstates"

export class SelectLocation extends Component {
	constructor() {
		super();
		this.handleChange = this.handleChange.bind(this);
		this.state = {
			countries: Countries,
			states: States,
			selectedCountry: "United States of America",
		};
	}

	handleChange(e) {
		this.setState({ selectedCountry: e.target.value });
	}

	render() {

		return (
			<>
				<Navigation />
				<Form className="registrationForm">
					<div className="cyan form-header text-white p-3 mb-3">
						<h5>Equalithon ＆ Team Selection</h5>
                        <p>Please enter your current location</p>
					</div>
					<Form.Group className="form-group">
						<Form.Label>Country</Form.Label>
						<Form.Control
							as="select"
							value={this.state.selectedCountry}
							onChange={this.handleChange.bind(this)}>
							{this.state.countries.map((country, i) => {
								return <option>{country.name}</option>;
							})}
						</Form.Control>
					</Form.Group>
					{ this.state.selectedCountry === 'United States of America' ? (
											<Form.Group className="form-group">
											<Form.Label>States</Form.Label>
											<Form.Control as="select">
												{this.state.states.map((state) => {
													return <option>{state.name}</option>;
												})}
											</Form.Control>
										</Form.Group>
					) : ( <div />)}
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
					<Row>
						<Col>
							<Button
								href="/job-info"
								size="lg"
								variant="warning"
								className="yellow text-dark next mx-auto">
								Next
							</Button>
						</Col>
					</Row>
				</Form>
			</>
		);
	}
}

export default SelectLocation;
