import LocationCard from '../components/LocationCard'
import React from 'react'
import { CardColumns } from 'react-bootstrap'
import { Route, Link } from 'react-router-dom';

export default class LocationsContainer extends React.Component{

  renderCards = () => {

  }

  componentDidMount(){
      //Fetch locations here
  }

  render(){
    return(
      <div className='wrapper' >

        <CardColumns>
          <Link>
            <LocationCard name="Bronx Zoo" number="(1800) 888-8883" address="221 Jungle ave." rating="3/5" image="https://s3-media0.fl.yelpcdn.com/bphoto/t1aGd5hqttWTu1ktTp1Rfg/348s.jpg" />
          </Link>
          <Link>
            <LocationCard name="Van Cortland Park" number="(1800) 888-8888" address="213 Somewhere ave." rating="4/5" image="https://s3-media0.fl.yelpcdn.com/bphoto/WoDPFRBftoH_XOKhEvfM7g/348s.jpg" />
          </Link>
          <Link>
            <LocationCard name="Botanical Garden" number="(1800) 888-8888" address="213 Somewhere ave." rating="4/5" image="https://s3-media0.fl.yelpcdn.com/bphoto/INkkUTu9HF2rY5azMihMGA/348s.jpg" />
          </Link>
        </CardColumns>
      </div>
      
    )
  } 
}