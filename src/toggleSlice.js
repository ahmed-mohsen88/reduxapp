import { createSlice } from "@reduxjs/toolkit";

const ToggleSlice = createSlice({
  name: "toggle",
  initialState: {  show: true },
  reducers: {
    show_hide: (state, action) => {
      state.show = action.payload;
    },
  },
});

// we take slice.reducer && slice.action from create slice
export const { show_hide } = ToggleSlice.actions; //destructuring to slice.action

export const selectCounterVisibility = (state) => state.Toggle.show; //counter from reducer name in store file

export default ToggleSlice.reducer;
