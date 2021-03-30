import React from 'react'
import LocationCard from '../components/LocationCard'

export default class AllLocations extends React.Component{
 
  renderCards = () => {
    return this.props.locations.map(location => {
      return(
        <div className='col pb-3'>
          <LocationCard lists={this.props.lists} {...location} />
        </div>
      )
    })
  }

  render(){
    return(
      <div className='wrapper row row-cols-1 row-cols-md-4 g-4' >
        {/* Separate into separate into other component */}
        {/* Here set switch for EXACT locations and location/:id */}
          {this.renderCards()}
      </div>
    )
  }

}