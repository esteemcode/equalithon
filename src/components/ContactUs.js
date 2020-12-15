import React, { useState } from 'react';


const ContactUs = () => {
    const [formData, setFormData] = useState({});
    const [message, setMessage] = useState("");

    const handleInput = e => {
        const copyFormData = { ...formData };
        copyFormData[e.target.name] = e.target.value;
        setFormData(copyFormData);
    };

    const sendData = async e => {
        e.preventDefault();

        try {

            const response = await fetch(
                "https://v1.nocodeapi.com/khalidame/google_sheets/YWaafKZnlAXkPIXj?tabId=ContactUs",
                {
                    method: "post",
                    body: JSON.stringify([
                        [formData.name, formData.email, formData.subject, formData.message]
                    ]),
                    headers: {
                        "Content-Type": "application/json"
                    }
                }
            );
            const json = await response.json();
            console.log("Success:", JSON.stringify(json));
            setMessage("Thank you for contacting us");
        } catch (error) {
            setMessage("Error");
        }
    };

    return (
        <div >

            <form className="m-auto col-9 border border-light p-5" onSubmit={sendData}>

                <h1 className="h4 mb-4">Contact us</h1>

                <label>Name</label>
                <input type="text" name="name" className="form-control mb-4" placeholder="Name" onChange={handleInput} required></input>

                <label>Email</label>
                <input type="email" name="email" className="form-control mb-4" placeholder="E-mail" onChange={handleInput} required ></input>


                <label>Subject</label>
                <input type="text" name="subject" className="form-control mb-4" placeholder="Subject" onChange={handleInput} required></input>

                <label>Your Message</label>
                <div className="form-group">
                    <textarea className="form-control rounded-0" name="message" type="text" placeholder="Message" onChange={handleInput} required></textarea>
                </div>


                <div className="custom-control custom-checkbox mb-4">
                    <input type="checkbox" className="custom-control-input" id="FormCopy"></input>
                    <label className="custom-control-label" htmlFor="FormCopy">Send me a copy of this message</label>
                </div>


                <button className="btn btn-info btn-block" name="submit" type="submit">Send</button>
                <div>{message}</div>
            </form>
        </div>


    )
}


export default ContactUs;
