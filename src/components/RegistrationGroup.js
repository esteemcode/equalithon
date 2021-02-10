import { React, useState } from "react";
import Navigation from "./landingPage/navigation/Navigation";
import { Container } from "react-bootstrap";
import {Link} from 'react-router-dom'

const RegistrationGroup = () => {
  const [data, setData] = useState({
    ifirstName1: "",
    ilastName1: "",
    iemail1: "",
    imessage1: "",
    ifirstName2: "",
    ilastName2: "",
    iemail2: "",
    imessage2: "",
    ifirstName3: "",
    ilastName3: "",
    iemail3: "",
    imessage3: "",
  });

  const {
    ifirstName1,
    ilastName1,
    iemail1,
    imessage1,
    ifirstName2,
    ilastName2,
    iemail2,
    imessage2,
    ifirstName3,
    ilastName3,
    iemail3,
    imessage3,
  } = data;

  const handleInput = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const sendData = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://v1.nocodeapi.com/essteem/google_sheets/IgoNtzYsdlMmRjbd?tabId=invite",
        {
          method: "post",
          body: JSON.stringify([
            [
              ifirstName1,
              ilastName1,
              iemail1,
              imessage1,
              ifirstName2,
              ilastName2,
              iemail2,
              imessage2,
              ifirstName3,
              ilastName3,
              iemail3,
              imessage3,
            ],
          ]),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const json = await response.json();
      console.log("Success:", JSON.stringify(json));
    } catch (error) {
      console.error("Error:", error);
    }

    const emailNewMember = async (email) => {
      try {
          const response = await fetch(`
          https://v1.nocodeapi.com/essteem/mailchimp/zxMrzqvGwZRRtmfr/members?list_id=5c5b621efb&email_address=${email}&status=subscribed`, {
              method: "post",
              headers: {
                  "Content-Type": "application/json"
              }
          });
          const json = await response.json();
          console.log("Success:", JSON.stringify(json));
      } catch (error) {
          console.error("Error:", error);
      }
  }

      emailNewMember(iemail1);
      emailNewMember(iemail2);
      emailNewMember(iemail3);

  document.getElementById("contact-form").reset();
  };

  return (
    <div>
      <Navigation />
      <form id="contact-form" className="registrationForm pb-6 mb-5" onSubmit={sendData}>
        <Container className="cyan form-header text-white p-3 pt-3 mb-1">
          <h5> Congrats! You are registered.</h5>
          <p> Invite 3 peers: the more to help, the merrier!</p>
        </Container>

        <p className="mx-1 p-1">
          Your contacts will receive an email with your invite; ie "Essteem does
          cool things for women in tech! Thought you'd be interested."
        </p>

          <div>
            <div className="row">
              <div className="col-6">
                <input
                  type="text"
                  name="ifirstName1"
                  className="form-control mb-2"
                  placeholder="First Name"
                  onChange={handleInput}
                ></input>
              </div>
              <div className="col-6">
                <input
                  type="text"
                  name="ilastName1"
                  className="form-control mb-2"
                  placeholder="Last Name"
                  onChange={handleInput}
                ></input>
              </div>
            </div>

            <input
              type="email"
              name="iemail1"
              className="form-control mb-2"
              placeholder="E-mail"
              onChange={handleInput}
            ></input>

            <input
              type="text"
              name="imessage1"
              className="form-control mb-4"
              placeholder="Your invite message"
              onChange={handleInput}
            ></input>
          </div>
          <div>
            <div className="row">
              <div className="col-6">
                <input
                  type="text"
                  name="ifirstName2"
                  className="form-control mb-2"
                  placeholder="First Name"
                  onChange={handleInput}
                ></input>
              </div>
              <div className="col-6">
                <input
                  type="text"
                  name="ilastName2"
                  className="form-control mb-2"
                  placeholder="Last Name"
                  onChange={handleInput}
                ></input>
              </div>
            </div>

            <input
              type="email"
              name="iemail2"
              className="form-control mb-2"
              placeholder="E-mail"
              onChange={handleInput}
            ></input>

            <input
              type="text"
              name="imessage2"
              className="form-control mb-4"
              placeholder="Your invite message"
              onChange={handleInput}
            ></input>
          </div>

          <div>
            <div className="row">
              <div className="col-6">
                <input
                  type="text"
                  name="ifirstName3"
                  className="form-control mb-2"
                  placeholder="First Name"
                  onChange={handleInput}
                ></input>
              </div>
              <div className="col-6">
                <input
                  type="text"
                  name="ilastName3"
                  className="form-control mb-2"
                  placeholder="Last Name"
                  onChange={handleInput}
                ></input>
              </div>
            </div>

            <input
              type="email"
              name="iemail3"
              className="form-control mb-2"
              placeholder="E-mail"
              onChange={handleInput}
            ></input>

            <input
              type="text"
              name="imessage3"
              className="form-control mb-4"
              placeholder="Your invite message"
              onChange={handleInput}
            ></input>
          </div>

        <Link to="/joinTeam">
        <button className="btn btn-warning float-right ">
          Send and Check out teams!
        </button></Link>
        <Link to="/joinTeam">
        <button className="btn float-right border mr-2">Skip</button></Link>
      </form>
    </div>
  );
};

export default RegistrationGroup;
