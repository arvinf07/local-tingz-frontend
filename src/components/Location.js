import React from 'react'

export default class Location extends React.Component{

  render(){
    return(
      <div className='location-card'>
        <img src={this.props.image}/>
        {this.props.name}
        Rating: {this.props.rating}
        Phone: {this.props.number}
        Address: {this.props.address}
      </div>
    )
    
  }
  
}