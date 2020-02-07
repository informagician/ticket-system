import React from 'react';
import { Link } from 'react-router-dom'

const Signin = () => {

    return (
        <div>
            <h2>Sign In</h2>
            <label>Email<input type="email" /></label>
            <label>Password<input type="password" /></label>
            <input type="Submit" value="Login" />
            <Link to="/signup">Create Account</Link>
            <Link to="/forgotpassword">Forgot Password?</Link>
        </div>
    )
}

export default Signin;