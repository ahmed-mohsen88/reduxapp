import { configureStore, createStore } from "@reduxjs/toolkit";

import counterReducer from "./slice";
import toggleSlicelice from "./toggleSlice";
import toggleSlice from "./toggleSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    Toggle: toggleSlicelice,
  },
});
