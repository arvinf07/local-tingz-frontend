import { combineReducers } from "redux";
import { listsReducer } from "./listsReducer";
import { locationsReducer } from "./locationsReducer";


const rootReducer = combineReducers({
  lists: listsReducer,
  locations: locationsReducer
});

export default rootReducer;
