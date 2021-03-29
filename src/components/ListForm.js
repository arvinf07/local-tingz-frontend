import React from 'react'

export default class ListForm extends React.Component{

  handleChange = (e) => {
    this.setState({
      formName: e.target.value
    })
  }

  render(){
    return(
      <form>
        <label>Name your list:</label>
        <input onChange={this.handleChange} type='text' value={this.state.formName} placeholder="Places for friends" />
        <input type="submit" value='Create List' />
      </form>
    ) 
  }

}