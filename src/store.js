import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import announcementReducer from "./reducers/announcementReducer";
import reminderReducer from "./reducers/announcementReducer";
import ticketReducer from "./reducers/ticketReducer";

const reducer = combineReducers({
	announcements: announcementReducer,
	reminders: reminderReducer,
	tickets: ticketReducer
});

export default createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk))
);