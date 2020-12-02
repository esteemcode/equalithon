import { BrowserRouter as Router, Route} from 'react-router-dom';
import React from 'react';
import RegistrationForm from './components/RegistrationForm';
import SignIn from './components/SignIn';
import ContactUs from './components/ContactUs';
import Feedback from './components/Feedback';
import './App.css';


function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/registration" exact component={RegistrationForm} />
        <Route path="/signin" exact component={SignIn} />
        <Route path="/contact" exact component={ContactUs} />
        <Route path="/feedback" exact component={Feedback} />
        
      </Router>
    </div>
  );
}

export default App;