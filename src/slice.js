import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "Count",
  initialState: { value: 0, show: true },
  reducers: {
    increament: (state, action) => {
      state.value += action.payload;
    },
    decrease: (state, action) => {
      state.value -= action.payload;
    },
    // show_hide: (state, action) => {
    //   state.show = action.payload;
    // },
  },
});

// we take slice.reducer && slice.action from create slice
export const { increament, decrease } = counterSlice.actions; //destructuring to slice.action
export const selectGlobalState = (state) => state;
export const selectCounterValue = (state) => state.counter.value; //counter from store reducer
// export const selectCounterVisibility = (state) => state.counter.show; //counter from reducer name in store file

export default counterSlice.reducer;
