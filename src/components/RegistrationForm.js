import React from 'react';

const RegistrationForm = () => {

    return (
        <div>
            <h1 className="registration">Registration Form</h1>
            <form className="registrationForm">
                <div className="form-group">
                <label for="firstName">First Name</label>
                <input type="text" className="form-control" id="firstName" placeholder="Enter your First Name" />
                </div>
                <div className="form-group">
                <label for="lastName">Last Name</label>
                <input type="text" className="form-control" id="lastName" placeholder="Enter your Last Name" />
                <small id="emailHelp" class="form-text text-muted">Email must contain @ symbol and "."</small>
                </div>
                <div className="form-group">
                <label for="email">Email address</label>
                <input type="email" className="form-control" id="email" placeholder="Enter your email" />
                </div>
                <div className="form-group">
                <label for="password">Password</label>
                <input type="password" className="form-control" id="password" placeholder="Enter your Password" />
                <small id="passwordHelp" class="form-text text-muted">Password must contain 8 characters and one Capitalized letter.</small>
                </div>
                <div className="form-group">
                <label for="confirmPassword">Confirm Password</label>
                <input type="confirmPassword" className="form-control" id="confirmPassword" placeholder="Confirm your Password" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
        
    )
}

export default RegistrationForm;