import React from 'react';
import { Link } from 'react-router-dom'

const ForgotPassword = () => {

    return (
        <div>
            <h2>Retrieve Your Password</h2>
            <label>Email<input type="email" /></label>
            <input type="Submit" value="Submit" />
            <Link to="/signup">Create Account</Link>
            <Link to="/signin">Login</Link>
        </div>
    )
}

export default ForgotPassword;