import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

// reducers
import messageReducer from "./reducers/messageReducer";
import suppliesReducer from "./reducers/suppliesReducer";
import productReducer from "./reducers/productReducer";
import fieldsReducer from "./reducers/fieldsReducer";
import modalReducer from "./reducers/modalReducer";

const reducer = combineReducers({
  messages: messageReducer,
  supplies: suppliesReducer,
  products: productReducer,
  fields: fieldsReducer,
	modals: modalReducer
});

export default createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk))
);