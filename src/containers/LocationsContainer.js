import React from 'react'
import { Route, Switch } from 'react-router-dom';
import AllLocations from './AllLocations';
import ShowLocation from '../components/ShowLocation'

export default class LocationsContainer extends React.Component{

  render(){
    return(
      <Switch>
        <Route exact path="/locations" component={() => <AllLocations addToList={this.props.addToList} lists={this.props.lists} locations={this.props.locations}/> } />
        <Route exact path="/locations/:id" component={ (routeInfo) =>{
          const location = this.props.locations.find(location => location.id === parseInt(routeInfo.match.params.id) )
          return !!location ? <ShowLocation data={location}/> : <h1>Sorry that location does not exist</h1> } }/>
      </Switch>
    )
  } 
}