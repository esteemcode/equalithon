import React, { useState } from 'react';
import Navigation from './landingPage/navigation/Navigation';
import { Modal, Button } from 'react-bootstrap';


const ContactUs = () => {

    const [formData, setFormData] = useState({});
    const [message, setMessage] = useState("");
    const [show, setShow] = useState(false);

    let positiveResponse = "Thank you for contacting us, we will get back to you not more than two business days.";
    let negativeResponse = "Oops, your inquiry has not been sent, please try again";

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleInput = e => {
        const copyFormData = { ...formData };
        copyFormData[e.target.name] = e.target.value;
        setFormData(copyFormData);
    };

    const sendData = async e => {
        e.preventDefault();

        try {

            const response = await fetch(
                "https://v1.nocodeapi.com/essteem/google_sheets/IgoNtzYsdlMmRjbd?tabId=contact",
                {
                    method: "post",
                    body: JSON.stringify([
                        [formData.cId, formData.cfname, formData.clname, formData.cemail, formData.csubject, formData.cmessage]
                    ]),
                    headers: {
                        "Content-Type": "application/json"
                    }
                }
            );
            const json = await response.json();
            console.log("Success:", JSON.stringify(json));
            setMessage(positiveResponse);
            setShow(true)
        } catch (error) {
            setMessage(negativeResponse);
        }
        document.getElementById("contact-form").reset();
    };

    return (
        <div >
            <Navigation />
            <form id="contact-form" className="registrationForm" onSubmit={sendData}>
                <h5 className="cyan form-header text-white p-3 mb-3">Contact us</h5>

                <input type="text" name="cfname" className="form-control mb-2" placeholder="First Name" onChange={handleInput} required></input>
                <input type="text" name="clname" className="form-control mb-2" placeholder="Last Name" onChange={handleInput} required></input>
                <input type="email" name="cemail" className="form-control mb-2" placeholder="E-mail" onChange={handleInput} required ></input>
                <input type="text" name="csubject" className="form-control mb-3" placeholder="Subject" onChange={handleInput} required></input>

                <div>
                    <textarea className="form-control rounded-0" name="cmessage" type="text" placeholder="Message" onChange={handleInput} required></textarea>
                </div>

                <button onChange={handleShow} variant="warning" className="btn yellow text-dark float-right px-5 mt-4">Send</button>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Contact Form Confirmation</Modal.Title>
                    </Modal.Header>
                    <Modal.Body style={{ color: message === negativeResponse ? 'red' : 'green' }}>{message}</Modal.Body>
                    <Modal.Footer>
                        <Button variant="light" onClick={handleClose}>
                            Close
                       </Button>
                    </Modal.Footer>
                </Modal>
            </form>
        </div>
    )
}

export default ContactUs;
