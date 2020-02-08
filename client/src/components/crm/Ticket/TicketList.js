import React from 'react';
import Ticket from './Ticket';
//import { Link } from 'react-router-dom';

const TicketList = () => {

    return (
        <main>
            <h2>All Tickets</h2>
            <div className="list-control">
                <div className="check">
                    <input type="checkbox"/>
                </div> 
                <div className="title">Title</div>
                <div className="department">Department</div>
                <div className="status">Status</div>
                <div className="date">Date</div>
            </div>
            <Ticket/>
        </main>
    )
}

export default TicketList;