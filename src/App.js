import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/landingPage/Home';
import RegistrationForm from './components/RegistrationForm';
import SignIn from './components/SignIn';
import ContactUs from './components/ContactUs';
import Feedback from './components/Feedback';
import './App.css';
import RegistrationGroup from './components/RegistrationGroup';
import DAndIRegistration from './components/DAndIRegistration';
import SponsorHome from './components/SponsorHome';
import Sponsorship from './components/Sponsorship';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={RegistrationForm} />
        <Route path="/home" exact component={Home} />
        <Route path="/signin" exact component={SignIn} />
        <Route path="/contact" exact component={ContactUs} />
        <Route path="/feedback" exact component={Feedback} />
        <Route path="/group-registration" exact component={RegistrationGroup} />
        <Route path="/sponsorship" exact component={Sponsorship} />
        <Route path="/sponsorhome" exact component={SponsorHome} />
        <Route path="/dandiregistration" exact component={DAndIRegistration} />
      </Router>
    </div>
  );
}

export default App;