import { Component } from "react";
import ListForm from "../components/ListForm";
import List from "../components/List";
import { connect } from "react-redux";
import { fetchLists, postList } from "../actions/actionCreators";

class ListsContainer extends Component{ 
  
  state = {
    showForm: false,
    listName: ""
  }

  componentDidMount(){
    this.props.fetchLists()
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

  handleSubmit = (e, listName) => {
    e.preventDefault()
    this.props.postList(listName)
    this.setState({
      listName: "",
      showForm: false
    })
  }

  handleChange = (e) => {
    this.setState({
      listName: e.target.value
    })
  }

  renderForm = () => {
    if (this.state.showForm){
      return <ListForm listName={this.state.listName} handleSubmit={this.handleSubmit} handleChange={this.handleChange} handleClick={this.handleClick} />
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

const mapStateToProps = state => {
  return {lists: state.lists}
}

export default connect( mapStateToProps, {fetchLists, postList})(ListsContainer)
