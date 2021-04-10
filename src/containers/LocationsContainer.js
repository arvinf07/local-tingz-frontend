import React from 'react'
import { Route, Switch } from 'react-router-dom';
import AllLocations from './AllLocations';
import ShowLocation from '../components/ShowLocation'
import { connect } from "react-redux";
import { fetchLocations, fetchLists } from "../actions/actionCreators";

class LocationsContainer extends React.Component{

  componentDidMount () {
    this.props.fetchLocations()
    this.props.fetchLists()
  }

  render(){
    return(
      <Switch>
        <Route exact path="/locations" component={ () => this.props.locations.length > 0 
          ? <AllLocations addToList={this.props.addToList} /> 
          : <img id="loading-img" src='https://miro.medium.com/max/1080/0*DqHGYPBA-ANwsma2.gif'/>} />
        <Route exact path="/locations/:id" component={ (routeInfo) =>{
          const location = this.props.locations.find(location => location.id === parseInt(routeInfo.match.params.id) )
          return !!location ? <ShowLocation data={location}/> : <h1>Sorry that location does not exist</h1> } }/>
      </Switch>
    )
  } 
}

const mapStateToProps = state => state

export default connect( mapStateToProps, {fetchLocations, fetchLists})(LocationsContainer)
