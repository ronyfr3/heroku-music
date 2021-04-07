import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import StateProvider from './redux/Store'
import "./index.css";

ReactDOM.render(
  <StateProvider>
    <App />
  </StateProvider>,
  document.getElementById("root")
);
