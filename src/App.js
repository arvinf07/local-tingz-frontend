import './App.css';
import LocationsContainer from './containers/LocationsContainer';
import NavBar from './components/NavBar'
import Home from "./containers/Home";
import { BrowserRouter as Router, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
    <div>
      <NavBar />
      <Route exact path="/" component={Home} />
      <Route exact path="/locations" component={LocationsContainer} />
    </div>
    </Router>
  );
}

export default App;
