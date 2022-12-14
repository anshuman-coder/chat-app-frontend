import thunk from "redux-thunk";
import createDebounce from "redux-debounced";
//import the rootReducers
import rootReducer from "../reducers/rootReducer";

import { createStore, applyMiddleware, compose } from "redux";

const middleware = [thunk, createDebounce()];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(rootReducer, {}, composeEnhancers(applyMiddleware(...middleware)));

export { store };