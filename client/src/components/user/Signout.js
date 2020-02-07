import React from 'react';
import { Redirect } from 'react-router';

const Signout = () => {
    localStorage.removeItem('token')
    
    return (
        <>
            <h2>Signing Out</h2>
            <Redirect to="/" />
        </>
    )
}

export default Signout;