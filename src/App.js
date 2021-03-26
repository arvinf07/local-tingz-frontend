import './App.css';
import LocationsContainer from './containers/LocationsContainer';
import NavBar from './components/NavBar'
import Home from "./containers/Home";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


export default function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/locations" component={LocationsContainer} />
      </Switch>
    </ Router>
  )
}