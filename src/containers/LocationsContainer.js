import React from 'react'
import { Route, Switch } from 'react-router-dom';
import AllLocations from './AllLocations';
import ShowLocation from '../components/ShowLocation'

export default class LocationsContainer extends React.Component{

  state = {
    locations: [], 
    currentLocation: {}
    
  }

  componentDidMount(){
    fetch('http://127.0.0.1:3000/locations')
    .then(resp => resp.json())
    .then(json => this.setState({
      locations: json
    }))
  }

  render(){
    return(
      <Switch>
        <Route exact path="/locations" component={() => <AllLocations locations={this.state.locations}/> } />
        <Route exact path="/locations/:id" component={ (routeInfo) =>{
          const location = this.state.locations.find(location => location.id === parseInt(routeInfo.match.params.id) )
          return !!location ? <ShowLocation routeStuff={routeInfo}/> : <h1>Sorry that location does not exist</h1> } }/>
      </Switch>
    )
  } 
}