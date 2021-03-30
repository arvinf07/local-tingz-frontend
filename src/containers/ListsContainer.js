import { Component } from "react";
import ListForm from "../components/ListForm";
import List from "../components/List";

export default class ListsContainer extends Component{ 
  
  state = {
    showForm: false,
    listName: "",
    lists: []
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

  handleSubmit = () => {
    const body = {name: this.state.listName}
    const configObject = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(body)
    }; 
    
    fetch(`http://127.0.0.1:3000/lists`, configObject)
    .then(resp => resp.json())
    .then(json => console.log(json))
    .catch( error => alert(error))
  
  }

  componentDidMount(){
    fetch('http://127.0.0.1:3000/lists')
    .then(resp => resp.json())
    .then(json => this.setState({
      lists: json
    }))
  }

  renderForm = () => {
    if (this.state.showForm){
      return <ListForm listName={this.state.listName} handleSubmit={this.handleSubmit} handleChange={this.handleChange} handleClick={this.handleClick} />
    } else{
      return <button className="form-btn" onClick={this.handleClick}>Make new list</button>
    }
  }

  renderLists = () => {
    return this.state.lists.map(list => {
      return(
        <List {...list} />
      )
     
    })
  }

  render(){
    return(
      <div className="lists-container">
        {this.renderLists()}
        {this.renderForm()}
      </div>
    )
  }
  
}