import React from 'react'
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import AddButton from './AddButton';


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
          <Link className='btn btn-primary' to={`/locations/${this.props.id}`}>More info</Link>
          <AddButton locationID={this.props.id} addToList={this.props.addToList} lists={this.props.lists}/>
        </Card.Body>
      </Card>
      </div>
    )
    
  }
  
}