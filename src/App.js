import { BrowserRouter as Router, Route} from 'react-router-dom'
import RegistrationForm from './components/RegistrationForm';
import SignIn from './components/SignIn';
import ContactUs from './components/ContactUs';
import Feedback from './components/Feedback';
import './App.css';
import RegistrationForm2 from './components/RegistrationForm2';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/registration" exact component={RegistrationForm} />
        <Route path="/signin" exact component={SignIn} />
        <Route path="/contact" exact component={ContactUs} />
        <Route path="/feedback" exact component={Feedback} />
        <Route path="/test-form" exact component={RegistrationForm2} />
      </Router>
    </div>
  );
}

export default App;