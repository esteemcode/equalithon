/** @format */

import React from "react";
import Navigation from './landingPage/navigation/Navigation';
import {Row,Col,Form,Button} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import Country from "./CountryRegionComponent";

const SelectLocation = () => {
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

export default SelectLocation;
