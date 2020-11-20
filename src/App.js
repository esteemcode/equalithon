import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import RegistrationForm from './components/RegistrationForm';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/registration" exact component ={RegistrationForm} />
      </Router>
    </div>
  );
}

export default App;