import React from 'react';


const ContactUs = () => {

    return (
        <div >
          
<form className="m-auto col-9 border border-light p-5" action="#!">
    
    <h1 className="h4 mb-4">Contact us</h1>
     
    <label>Name</label>
    <input type="text" id="FormName" className="form-control mb-4" placeholder="Name" required></input>

    <label>Email</label>
    <input type="email" id="FormEmail" className="form-control mb-4" placeholder="E-mail" pattern="^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$" required ></input>

   
    <label>Subject</label>
    <input type="text" id="FormSubject" className="form-control mb-4" placeholder="Subject" required></input>

    <label>Your Message</label>
    <div className="form-group">
        <textarea className="form-control rounded-0" id="Textarea" rows="3" placeholder="Message" required></textarea>
    </div>

   
    <div className="custom-control custom-checkbox mb-4">
        <input type="checkbox" className="custom-control-input" id="FormCopy"></input>
        <label className="custom-control-label" for="dFormCopy">Send me a copy of this message</label>
    </div>

    
    <button className="btn btn-info btn-block" type="submit">Send</button>
    </form>
   </div>
 
        
    )
}

export default ContactUs;