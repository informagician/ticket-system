import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
//import logo from './logo.svg';
import './App.css';
import Signin from './components/user/Signin';
import Signup from './components/user/Signup';
import ForgotPassword from './components/user/ForgotPassword';

function App() {
  return (
    <Router>
      <Route exact path="/" component={Signin} />
      <Route path="/signin" component={Signin} />
      <Route path="/signup" component={Signup} />
      <Route path="/forgotpassword" component={ForgotPassword} />
    </Router>
  );
}

export default App;
