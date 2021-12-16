import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

// reducers
import announcementReducer from "./reducers/announcementReducer";
import reminderReducer from "./reducers/announcementReducer";
import ticketReducer from "./reducers/ticketReducer";
import itemReducer from "./reducers/itemReducer";
import productReducer from "./reducers/productReducer";

const reducer = combineReducers({
	announcements: announcementReducer,
	reminders: reminderReducer,
	tickets: ticketReducer,
	supplies: itemReducer,
	products: productReducer
});

export default createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk))
);