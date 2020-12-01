import { BrowserRouter as Router, Route } from 'react-router-dom'
import RegistrationForm from './components/RegistrationForm';
import SignIn from './components/SignIn';
import ContactUs from './components/ContactUs';
import Feedback from './components/Feedback';
import Sponsorship from './components/Sponsorship';
import SponsorHome from './components/SponsorHome';
import DAndIRegistration from './components/DAndIRegistration';
import './App.css';
// import RegistrationForm2 from './components/RegistrationForm2';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/registration" exact component={RegistrationForm} />
        <Route path="/signin" exact component={SignIn} />
        <Route path="/contact" exact component={ContactUs} />
        <Route path="/feedback" exact component={Feedback} />
        <Route path="/sponsorship" exact component={Sponsorship} />
        <Route path="/sponsorhome" exact component={SponsorHome} />
        <Route path="/dandiregistration" exact component={DAndIRegistration} />
        {/* <Route path="/test-form" exact component={RegistrationForm2} /> */}
      </Router>
    </div>
  );
}

export default App;