import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
//import logo from './logo.svg';
import './App.css';
import PrivateRoute from './utils/PrivateRoute';
import Signin from './components/user/Signin';
import Signup from './components/user/Signup';
import Signout from './components/user/Signout';
import ForgotPassword from './components/user/ForgotPassword';
import Dashboard from './components/crm/Dashboard';

function App() {
  return (
    <Router>
      <Route exact path="/" component={Signin} />
      <Route path="/signin" component={Signin} />
      <Route path="/signup" component={Signup} />
      <Route path="/forgotpassword" component={ForgotPassword} />
      <PrivateRoute path="/crm/dashboard" component={Dashboard} />
      <PrivateRoute path="/signout" component={Signout} />
    </Router>
  );
}

export default App;
