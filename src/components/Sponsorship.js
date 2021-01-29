/** @format */

import { useState } from "react";
import { Container, Form, Button, Col, Row } from "react-bootstrap";
import Navigation from "./landingPage/navigation/Navigation.jsx";

const Sponsorship = () => {
	const [goals, setGoals] = useState([
		{ name: "Improve your Employers brand", checked: false },
		{ name: "Recruit diverse profiles", checked: false },
		{ name: "Improve your inclusiveness", checked: false },
		{ name: "Give back to the Women community", checked: false },
		{ name: "Other - provide details", checked: false },
	]);
	const [selectedGoal, setSelectedGoal] = useState(0);
	const [brandName, setBrandName] = useState("");
	const [logo, setLogo] = useState("");
	const [companyDescription, setCompanyDescription] = useState("");
	const [companyMission, setCompanyMission] = useState("");
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
		setGoalsSelected(true);
	};

	const handleFormSubmit = (event) => {
		event.preventDefault();
		const formData = {
			goal: goals[selectedGoal].name,
			brandName: brandName,
			logo: logo,
			description: companyDescription,
			mission: companyMission,
		};
		postData(formData);
	};

	const postData = async (formData) => {
		try {
			const response = await fetch(
				`https://v1.nocodeapi.com/essteem/google_sheets/IgoNtzYsdlMmRjbd?tabId=sponsorRegistration`,
				{
					method: "post",
					body: JSON.stringify([
						[
							formData.goal,
							formData.brandName,
							formData.logo,
							formData.description,
							formData.mission,
						],
					]),
					headers: {
						"Content-Type": "application/json",
					},
				}
			);
			const json = await response.json();
			console.log("Success:", JSON.stringify(json));
			console.log("form submitted");
		} catch (error) {
			console.error("Error:", error);
		}
	};

	return (
		<>
			<Navigation />
			<Container className="registrationForm">
				<Row className="justify-content-md-center">
					<Col lg={12} md={12} sm={12} xs={12}>
						<Form onSubmit={handleFormSubmit}>
							{!goalsSelected ? (
								<>
									<Row className="cyan form-header text-white pt-1 pb-1 col-12 mt-0 ml-0 mr-0 mb-3">
										<Row className="m-0 col-12 pl-0 pr-0 pt-2 pb-0">
											<h4>Welcome to Essteem</h4>
										</Row>
										<Row className="m-0 col-12 pl-0 pr-0 pt-0 pb-1">
											<h6>Please select your primary goal with Essteem</h6>
										</Row>
									</Row>
									{goals.map((item, index) => {
										return (
											<Form.Check
												className="radio-button__hidden form-control"
												key={index}
												defaultChecked={item.checked}
												name={`goals`}
												type={`radio`}
												label={item.name}
												id={`radio-${index}`}
												onClick={() => handleSetChecked(index)}
											/>
										);
									})}
								</>
							) : (
								<>
									<Row className="yellow form-header text-white pt-1 pb-1 col-12 mt-0 ml-0 mr-0 mb-3">
										<Row className="m-0 col-12 pl-0 pr-0 pt-2 pb-2">
											<h4>Create a space for your company</h4>
										</Row>
									</Row>
									<Form.Group>
										<Form.Control
											type="text"
											placeholder="Employer's brand name"
											value={brandName}
											onChange={(e) => setBrandName(e.target.value)}
											required
										/>
									</Form.Group>
									<Form.Group>
										<Form.Control
											type="url"
											placeholder="Logo Url"
											value={logo}
											onChange={(e) => setLogo(e.target.value)}
											required
										/>
									</Form.Group>
									<Form.Group>
										<Form.Control
											type="text"
											as="textarea"
											placeholder="Describe your company"
											value={companyDescription}
											onChange={(e) => setCompanyDescription(e.target.value)}
											required
										/>
									</Form.Group>
									<Form.Group>
										<Form.Control
											type="text"
											as="textarea"
											placeholder="Describe what you do for women"
											value={companyMission}
											onChange={(e) => setCompanyMission(e.target.value)}
										/>
									</Form.Group>
									<Button
										className="cyan a-inherit border-0 cyan-hover text-white"
										type="submit"
										variant="primary"
										size="lg"
										block>
										Next
									</Button>
								</>
							)}
						</Form>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default Sponsorship;
