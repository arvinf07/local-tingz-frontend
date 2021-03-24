import React from 'react'
import { Button, Card } from 'react-bootstrap';


export default class Location extends React.Component{

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
        <Card.Img variant="top" src={this.props.image} width="286" height="180" />
        <Card.Body>
        <Card.Title>{this.props.name}</Card.Title>
          <Card.Text>
            Here I can put all of the other info 
          </Card.Text>
          <Button variant="primary">Add to list</Button>
        </Card.Body>
      </Card>
      </div>
      
    )
    
  }
  
}