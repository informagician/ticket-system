import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {

    return (
        <div className="navbar">
            <h1>Ticket System</h1>
            <NavLink to="/signout">Logout</NavLink>
        </div>
    )
}

export default Navigation;