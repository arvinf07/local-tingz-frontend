/// DO I NEED TO MAKE A SEPARATE REDUCER JUST 

export default function listsReducer(state = [], action){
  switch(action.type){
    case 'ADD_LISTS':
      return action.lists
    case 'ADD_LOCATION':
      ///pass in location object
      ///spread it into the list array
    case 'CREATE_LIST':
      ///pass in a name in the actionObj
      ///add a new listObj to state.lists
    default:
      return state
  }
}