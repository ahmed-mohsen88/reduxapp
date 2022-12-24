// const initialState = {
//   count: 0,
//   show: true,
// };

// const couterReducer = (state = initialState, action) => {
//   switch (action) {
//     case increament:
//       console.log(action);
//       return { ...state, count: state.count + action.payload };
//     case decrement:
//       console.log("dec");
//       return { ...state, count: state.count - action.payload };
//     case show:
//       console.log("show");
//       return { ...state, show: (state.show = action.payload) };

//     case hide:
//       console.log("hide");
//       return { ...state, show: (state.show = action.payload) };

//     default:
//       console.log(state);
//       return state;
//   }
// };
// export const show = {
//   type: "show",
//   payload: true,
// };

// export const hide = {
//   type: "hide",
//   payload: false,
// };
// export const increament = {
//   type: "INC",
//   payload: 1,
// };

// export const decrement = {
//   type: "DEC",
//   payload: 1,
// };
// export default couterReducer;
