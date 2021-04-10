
export default function listsReducer(state = [], action){
  switch(action.type){
    case 'ADD_LISTS':
      return action.lists
    case 'ADD_TO_LIST':
      ///pass in location object
      ///spread it into the list.locations array
      
    case 'CREATE_LIST':
      return [...state, action.listName]
      
    default:
      return state
  }
}