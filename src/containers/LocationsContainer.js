import Location from '../components/Location'
import React from 'react'
import { CardColumns } from 'react-bootstrap'

export default class LocationsContainer extends React.Component{

  renderCards = () => {

  }

  //Fetch locations here

  render(){
    return(
      <CardColumns>
        <Location name="Bronx Zoo" number="(1800) 888-8883" address="221 Jungle ave." rating="3/5" image="https://s3-media0.fl.yelpcdn.com/bphoto/t1aGd5hqttWTu1ktTp1Rfg/348s.jpg" />
        <Location name="Van Cortland Park" number="(1800) 888-8888" address="213 Somewhere ave." rating="4/5" image="https://s3-media0.fl.yelpcdn.com/bphoto/WoDPFRBftoH_XOKhEvfM7g/348s.jpg" />
        <Location name="Botanical Garden" number="(1800) 888-8888" address="213 Somewhere ave." rating="4/5" image="https://s3-media0.fl.yelpcdn.com/bphoto/INkkUTu9HF2rY5azMihMGA/348s.jpg" />
      </CardColumns>
    )
  } 
}