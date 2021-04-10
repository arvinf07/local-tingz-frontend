import React from 'react'
import './App.css';
import NavBar from './components/NavBar'
import Home from "./containers/Home";
import ListsContainer from "./containers/ListsContainer";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LocationsContainer from './containers/LocationsContainer';
import { connect } from "react-redux";
import { fetchLocations, fetchLists } from "./actions/actionCreators";


class App extends React.Component{
  
  addToList = (e, list, locationID) => {
    const body = {location_id: locationID}
    const configObject = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(body)
    }; 
    
    fetch(`http://127.0.0.1:3000/lists/${list.id}`, configObject)
    .then(resp => resp.json())
    .then(json => this.setState({
      lists: json
    }))
    
  }

  handleSubmit = (e, listName) => {
    e.preventDefault()
    const body = {name: listName}
    const configObject = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(body)
    }; 
    
    fetch(`http://127.0.0.1:3000/lists`, configObject)
    .then(resp => resp.json())
    .then(json => {
      this.setState((prevState) => {
        return {lists: [...prevState.lists, json]}
      })
    })
  
  }

  componentDidMount(){
    this.props.fetchLocations()
    this.props.fetchLists()
  }

  render(){
    return(
      <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/locations" component={ () => this.props.locations.length > 0 
          ? <LocationsContainer addToList={this.addToList} locations={this.props.locations} /> 
          : <img id="loading-img" src='https://miro.medium.com/max/1080/0*DqHGYPBA-ANwsma2.gif'/>} />
        <Route path="/lists" component={() => <ListsContainer handleSubmit={this.handleSubmit} lists={this.props.lists} />} />
      </Switch>
    </ Router>
    )
  }
  
}

const mapStateToProps = (state) => {
  console.log(state)
  return state
}

export default connect( mapStateToProps, {fetchLocations, fetchLists})(App)

