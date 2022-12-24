import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: 0, show: true };

const counterSlice = createSlice({
  name: "Count",
  initialState,
  reducers: {
    increament: (state, action) => {
      state.value += 1;
    },
    decrease: (state, action) => {
      state.value -= 1;
    },
    show: (state, action) => {
      state.show = true;
    },
    hide: (state, action) => {
      state.show = false;
    },
  },
});
export const { increament, decrease, show, hide } = counterSlice.actions;
export const selectGlobalState = (state) => state;
export const selectCounterValue = (state) => state.value;
export const selectCounterVisibility = (state) => state.show;

export default counterSlice.reducer;
