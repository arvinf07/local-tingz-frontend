import React from 'react'
import SearchBar from '../components/SearchBar'
import LocationsContainer from './LocationsContainer'


export default class Home extends React.Component{

  // Should this be in App?
  state = {
    loggedIn: false
  }

  render(){
    return(
      <div>
        <SearchBar />
        <LocationsContainer locations={this.props.locations} />
        {/* Is it worth it to make two more components OR just pass in new props */}
        {/* {this.state.loggedIn ? <MyLocationsContainer /> : <RandomLocations />} */}
      </div>
    )
  }

}