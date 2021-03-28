import React from 'react'

import { Button, Card } from 'react-bootstrap';


export default class LocationCard extends React.Component{

  render(){
    return(
      // <div className='location-card'>
      //   <img src={this.props.image}/>
      //   {this.props.name}
      //   Rating: {this.props.rating}
      //   Phone: {this.props.number}
      //   Address: {this.props.address}
      // </div>
      <div className='location-card' >
        <Card border="primary" style={{ width: '18rem' }}>
        <Card.Img variant="top" src={this.props.image_url} width="286" height="180" />
        <Card.Body>
        <Card.Title>{this.props.name}</Card.Title>
          <Card.Text>
            Rating: {this.props.rating}/5 <br/>
            Categories: {this.props.categories} <br/> 
            Address: {this.props.address} <br/>
          </Card.Text>
          <Button variant="primary">More info</Button>
        </Card.Body>
      </Card>
      </div>
      
    )
    
  }
  
}