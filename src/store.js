import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

// reducers
import announcementReducer from "./reducers/announcementReducer";
import reminderReducer from "./reducers/announcementReducer";
import ticketReducer from "./reducers/ticketReducer";
import suppliesReducer from "./reducers/suppliesReducer";
import productReducer from "./reducers/productReducer";
import fieldsReducer from "./reducers/fieldsReducer";

const reducer = combineReducers({
  announcements: announcementReducer,
  reminders: reminderReducer,
  tickets: ticketReducer,
  supplies: suppliesReducer,
  products: productReducer,
  fields: fieldsReducer,
});

export default createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk))
);