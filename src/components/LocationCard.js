import React from 'react'

import { Button, Card } from 'react-bootstrap';


export default class LocationCard extends React.Component{

  render(){
    return(
      <div>
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
          <img className="add-btn" src="https://cdn.iconscout.com/icon/free/png-512/add-new-1439785-1214356.png"/>
        </Card.Body>
      </Card>
      </div>
    )
    
  }
  
}