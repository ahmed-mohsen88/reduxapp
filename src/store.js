import { createStore } from "@reduxjs/toolkit";

import counterReducer from "./slice";

export const store = createStore(counterReducer);

export default store;
