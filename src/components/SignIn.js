import React from 'react';

const SignIn = () => {

    return (
        <div>
            <h3>SIGN UP</h3>
        <form>       
            <table>
                <tr>
                    <td>First name</td>
                    <td><input type="text" placeholder= "First name" name=""/></td>
                </tr>
                <tr>
                    <td>Last name</td>
                    <td><input type="text" placeholder= "Last name" name=""/></td>
                </tr>
                <tr>
                    <td>Email address</td>
                    <td><input type="mail" placeholder= "Email" name=""/></td>
                </tr>
                <tr>
                    <td>Password</td>
                    <td><input type="password" placeholder= "Password" name=""/></td>
                </tr>
                <tr>
                    <td>Confirm password</td>
                    <td><input type="password" placeholder= "Confirm password" name=""/></td>
                </tr><br/>
            </table>
        
                <p>Already signed up? <input type="submit" value="Login"/></p><br/>

                <a href="#" class="google btn"><i class="fa fa-google fa-fw"></i> Login with Google+ </a><br/>
                <a href="">Forgot Password?</a>
         </form>
         </div>
        
    )
}

export default SignIn;