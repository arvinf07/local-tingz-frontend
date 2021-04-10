
export default function listsReducer(state = [], action){
  switch(action.type){
    case 'ADD_LISTS':
      return action.lists
    case 'ADD_LOCATION':
      ///pass in location object
      ///spread it into the list array
    case 'CREATE_LIST':
      return [...state, action.listName]
      
    default:
      return state
  }
}