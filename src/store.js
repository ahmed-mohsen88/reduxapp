import { applyMiddleware, configureStore, createStore } from "@reduxjs/toolkit";
import couterReducer from "./counterReducer";
import { composeWithDevTools } from "redux-devtools-extension";


const store = createStore(
  couterReducer,
  composeWithDevTools(
    applyMiddleware(),
    // other store enhancers if any
  )
);

export default store;
