import React from 'react'
import { CardColumns } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import LocationCard from '../components/LocationCard'

export default class AllLocations extends React.Component{
 

  renderCards = () => {
    return this.props.locations.map(location => {
      return(
        <div className='col pb-3'>
          <Link key={location.id} to={`/locations/${location.id}`}>
            <LocationCard   {...location} />
          </Link>
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