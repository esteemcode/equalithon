import { React, useState } from "react";
import Navigation from "./landingPage/navigation/Navigation";
import { Container } from "react-bootstrap";

const RegistrationGroup = () => {
  const [countForm, setCountForm] = useState(1);
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

  const onAddPeerClick = () => {
    let newCountForm = countForm + 1;

    setCountForm(newCountForm);
  };

  const onDeleteClick = () => {
    let count = countForm - 1;

    setCountForm(count);
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
    } catch (error) {}
    document.getElementById("contact-form").reset();
  };

  return (
    <div>
      <Navigation />
      <form id="contact-form" className="registrationForm" onSubmit={sendData}>
        <Container className="cyan form-header text-white p-2 mb-3">
          <h5> One last thing.</h5>
          <p> Invite 3 peers: the more to help, the merrier!</p>
        </Container>

        <p className="mb-2 ml-2">
          Your contacts will receive an email with your invite; ie "Essteem does
          cool things for women in tech! Thought you'd be interested."
        </p>

        {countForm > 0 && (
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
        )}

        {countForm > 1 && (
          <div>
            <div className="row">
              <div className="col-6">
                <input
                  type="text"
                  name="ifirstName2"
                  className="form-control mb-2"
                  placeholder="*First Name"
                  onChange={handleInput}
                ></input>
              </div>
              <div className="col-6">
                <input
                  type="text"
                  name="ilastName2"
                  className="form-control mb-2"
                  placeholder="*Last Name"
                  onChange={handleInput}
                ></input>
              </div>
            </div>

            <input
              type="email"
              name="iemail2"
              className="form-control mb-2"
              placeholder="*E-mail"
              onChange={handleInput}
            ></input>

            <input
              type="text"
              name="imessage2"
              className="form-control mb-4"
              placeholder="*Your invite message"
              onChange={handleInput}
            ></input>
          </div>
        )}

        {countForm > 2 && (
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
        )}

        <button
          onClick={onAddPeerClick}
          disabled={countForm === 3 ? true : false}
          className="btn cyan mr-2"
        >
          Add Contact
        </button>
        <button
          onClick={onDeleteClick}
          disabled={countForm > 1 ? false : true}
          className="btn cyan"
        >
          Delete Contact
        </button>
        <button className="btn btn-warning float-right ">
          Send and Check out teams!
        </button>
        <button className="btn float-right border mr-2">Skip</button>
      </form>
    </div>
  );
};

export default RegistrationGroup;
