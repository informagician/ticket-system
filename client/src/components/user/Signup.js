import React from 'react';
import { Link } from 'react-router-dom'

const Signup = () => {

    return (
        <div>
            <h2>Sign Up</h2>
            <label>Name<input type="text" /></label>
            <label>Email<input type="email" /></label>
            <label>Password<input type="password" /></label>
            <label><input type="checkbox" />I Agree to Terms of Service.</label>
            <input type="Submit" value="Sign Up" />
            <Link to="/signin">Sign In</Link>
        </div>
    )
}

export default Signup;