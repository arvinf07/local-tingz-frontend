import React from 'react'
import './App.css';
import NavBar from './components/NavBar'
import Home from "./containers/Home";
import ListsContainer from "./containers/ListsContainer";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LocationsContainer from './containers/LocationsContainer';
import { connect } from "react-redux";
import { addToList } from "./actions/actionCreators"; 


class App extends React.Component{
  
  addToList = (e, list, locationID) => {
    this.props.addToList(list, locationID)
  }

 

  render(){
    return(
      <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/locations" component={ () => <LocationsContainer addToList={this.addToList}/> }/>
        <Route path="/lists" component={() => <ListsContainer/>} />
      </Switch>
    </ Router>
    )
  }
  
}

export default connect( null, { addToList })(App)

///////// CONNECT allLocations and listsContainers to map dispatch addlist and postList?? 