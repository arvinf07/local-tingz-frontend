import { Component } from "react";
import ListForm from "../components/ListForm";

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

  renderForm = () => {
    if (this.state.showForm){
      return <ListForm/>
    } else{
      return <button onClick={this.handleClick}>Make new list</button>
    }
  }

  render(){
    return(
      <div className="lists-container">
        {this.renderForm()}
      </div>
    )
  }
  
}