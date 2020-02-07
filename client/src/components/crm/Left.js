import React from 'react';
import { NavLink } from 'react-router-dom';

const Left = () => {
    

    return (
        <div className="left">
            <NavLink to="/crm/dashboard/ticketlist" style={{ textDecoration: 'none' }} activeClassName="active"><div className="left-menu-item">All Tickets</div></NavLink>
            <NavLink to="/crm/dashboard/newticket" style={{ textDecoration: 'none' }} activeClassName="active"><div className="left-menu-item">Open New Ticket</div></NavLink>
        </div>
    )
}

export default Left;