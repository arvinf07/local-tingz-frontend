import { Component } from "react";
import ListForm from "../components/ListForm";
import List from "../components/List";

export default class ListsContainer extends Component{ 
  
  state = {
    showForm: false,
    listName: ""
  }

  handleClick = () => {
    this.setState((prevState) => {
      if (prevState.showForm){
        return {showForm: false}
      } else {
        return {showForm: true}
      }
    })
  }

  handleChange = (e) => {
    this.setState({
      listName: e.target.value
    })
  }

  renderForm = () => {
    if (this.state.showForm){
      return <ListForm listName={this.state.listName} handleSubmit={this.props.handleSubmit} handleChange={this.handleChange} handleClick={this.handleClick} />
    } else{
      return <button className="form-btn" onClick={this.handleClick}>Make new list</button>
    }
  }

  renderLists = () => {
    return this.props.lists.map(list => {
      return(
        <List className="col pb-3" {...list} />
      )
     
    })
  }

  render(){
    return(
      <div className="lists-container wrapper row row-cols-1 row-cols-md-4 g-4">
        {this.renderLists()}
        {this.renderForm()}
      </div>
    )
  }
  
}