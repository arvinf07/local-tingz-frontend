import React from 'react'
import SearchBar from '../components/SearchBar'
import LocationsContainer from './LocationsContainer'

// EDIT LIST, DELETE LIST

export default class Home extends React.Component{

  render(){
    return(
      <div>
        <LocationsContainer locations={this.props.locations} />
        {/* Is it worth it to make two more components OR just pass in new props */}
        {/* {this.state.loggedIn ? <MyLocationsContainer /> : <RandomLocations />} */}
      </div>
    )
  }

}