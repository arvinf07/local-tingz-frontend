import React from 'react'

export default class SearchBar extends React.Component{

  state = {
    zipCode: ""
  }

  handleChange = (e) => {
    this.setState({
      zipCode: e.target.value
    })
  }

  render(){
    return(
      <form>
        <input onChange={this.handleChange} type='text' value={this.state.zipCode} placeholder="Enter Zipcode..." />
        <select>
          <option>all</option>
          <option>Category</option>
          <option>Category1</option>
          <option>Category2</option>
        </select>
        <input type="submit" value='Search' />
    </form>
    ) 
  }

}
