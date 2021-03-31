import React from 'react'

export default class ListForm extends React.Component{

  render(){
    return(
      <div className="list-form">
         <form onSubmit={e => this.props.handleSubmit(e, this.props.listName)}>
          <button onClick={this.props.handleClick}>X</button>
          <label>Name your list:</label>
          <input onChange={ e => this.props.handleChange(e)} type='text' value={this.props.listName} placeholder="Places for friends" />
          <input type="submit" value='Create List' />
        </form>
      </div>
     
    ) 
  }

}