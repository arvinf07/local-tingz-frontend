import './App.css';
import NavBar from './components/NavBar'
import Home from "./containers/Home";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LocationsContainer from './containers/LocationsContainer';


export default function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/locations" component={LocationsContainer} />
      </Switch>
    </ Router>
  )
}