import React from 'react'
import { CardColumns } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import LocationCard from '../components/LocationCard'

export default class AllLocations extends React.Component{
 

  renderCards = () => {
    return this.props.locations.map(location => {
      return(
        <Link key={location.id} to={`/locations/${location.id}`}>
          <LocationCard   {...location} />
        </Link>
      )
     
    })
  }

  render(){
    return(
      <div className='wrapper' >
        {/* Separate into separate into other component */}
        {/* Here set switch for EXACT locations and location/:id */}
        <CardColumns>
          {this.renderCards()}
        </CardColumns>
      </div>
    )
  }

}