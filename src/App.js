import { useEffect, useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import couterReducer from "./counterReducer";
import store from "./store";
import { increament, decrement, show, hide } from "./counterReducer";

function App() {
  const globalState = useSelector((state) => state);
  const st = globalState.count;
  const showHide = globalState.show;

  const dispatch = useDispatch();

  const handelClick = (action) => {
    dispatch(action);
  };

  const handelShowHide = () => {
    switch (showHide) {
      case true:
        return dispatch(hide);
      case false:
        return dispatch(show);
      default:
        break;
    }
  };
  return (
    <div className="App">
      {showHide && <h1>{st}</h1>}
      <div>
        <button
          onClick={() => {
            handelClick(increament);
          }}
        >
          +
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            handelClick(decrement);
          }}
        >
          -
        </button>
      </div>
      <div>
        <button onClick={handelShowHide}>Show/hide</button>
      </div>
    </div>
  );
}

export default App;
