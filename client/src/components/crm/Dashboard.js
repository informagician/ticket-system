import React from 'react';
import Navigation from './Navigation';
import Left from './Left';
import Right from './Right';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import NewTicket from './Ticket/NewTicket';
import TicketList from './Ticket/TicketList';
import PrivateRoute from '../../utils/PrivateRoute';

const Dashboard = () => {

    return (
        <>
        <Navigation />
        <div className="container">
            <Switch>
                <Router>
                    <Left />
                    <PrivateRoute path="/crm/dashboard/newticket" component={NewTicket} />
                    <PrivateRoute path="/crm/dashboard/ticketlist" component={TicketList} />
                </Router>
                </Switch>
            <Right />
        </div>
        </>
    )
}

export default Dashboard;