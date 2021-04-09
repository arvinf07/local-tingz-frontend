export default function locationsReducer(state = [], action){
  switch (action.type) {
    ///When fetch() is fullfilled
    case "ADD_LOCATIONS":
      return action.locations

    default:
      return state;
  }
}