import React from 'react'
import './App.css';
import NavBar from './components/NavBar'
import Home from "./containers/Home";
import ListsContainer from "./containers/ListsContainer";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LocationsContainer from './containers/LocationsContainer';


export default class App extends React.Component{

  state = {
    locations: [], 
    currentLocation: {}, 
    lists: []
  }
  

  componentDidMount(){
    fetch('http://127.0.0.1:3000/locations')
    .then(resp => resp.json())
    .then(json => this.setState({
      locations: json
    }))
    fetch('http://127.0.0.1:3000/lists')
    .then(resp => resp.json())
    .then(json => this.setState({
      lists: json
    }))
  }

  render(){
    return(
      <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/locations" component={ () => this.state.locations.length > 0 ? <LocationsContainer lists={this.state.lists} locations={this.state.locations} /> : <h1>Loadingggggg</h1>} />
        <Route path="/lists" component={() => <ListsContainer lists={this.state.lists} />} />
      </Switch>
    </ Router>
    )
  }
  
}