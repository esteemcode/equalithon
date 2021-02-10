import React from "react";
import Navigation from "./landingPage/navigation/Navigation";
import Country from "./CountryRegionComponent";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";

const CompanyRating = () => {
  return (
    <div>
      <Navigation />

      <div className="registrationForm mb-4">
        <div className="cyan form-header text-white p-3 mb-3">
          <h5>Company Rating</h5>
        </div>

        <p className="m-2 p-2 px-4">
          Please answer below: we're building a great tool for you to find great
          teams. The information you enter is anonymous.
        </p>
        <Card className="mt-3">
          <Card.Header>I identify as</Card.Header>

          <Card.Body>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="exampleRadios"
                id="exampleRadios1"
                checked
              />
              <label class="form-check-label" for="exampleRadios1">
                Woman
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="exampleRadios"
                id="exampleRadios2"
              />
              <label class="form-check-label" for="exampleRadios2">
                Man
              </label>
            </div>

            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="exampleRadios"
                id="exampleRadios3"
              />
              <label class="form-check-label" for="exampleRadios2">
              Non-Binary
              </label>
            </div>
          </Card.Body>
        </Card>

        <Card className="mt-3">
          <Card.Header>Details</Card.Header>

          <Card.Body>
            <div className="form-group">
              <label for="exampleFormControlSelect1">
                Your overall Team's Function
              </label>
              <select className="form-control" id="exampleFormControlSelect1">
                <option>R&D</option>
                <option>Product</option>
                <option>Operations</option>
                <option>Tech</option>
                <option>IT</option>
              </select>
            </div>

            <div className="form-group">
              <label for="exampleFormControlSelect1">
                Your team's primary Country
              </label>

              <Country />
            </div>
          </Card.Body>
        </Card>

        <Card className="mt-3">
          <Card.Header>Rating</Card.Header>

          <Card.Body>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="exampleRadios"
                id="exampleRadios1"
                checked
              />
              <label class="form-check-label" for="exampleRadios1">
                My Team is diverse and inclusive
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="exampleRadios"
                id="exampleRadios2"
              />
              <label class="form-check-label" for="exampleRadios2">
                My Team is diverse but not inclusive
              </label>
            </div>

            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="exampleRadios"
                id="exampleRadios3"
              />
              <label class="form-check-label" for="exampleRadios2">
                My Team is not diverse nor inclusive
              </label>
            </div>
          </Card.Body>
        </Card>

        <Button
          href="./registration-group"
          variant="warning"
          className="next yellow text-dark float-right mt-3"
          type="submit"
        >
          Next
        </Button>
        <Button
          href="./registration-group"
          className="btn btn-light text-dark mt-3"
          type="submit"
        >
          Skip
        </Button>
      </div>
    </div>
  );
};

export default CompanyRating;
