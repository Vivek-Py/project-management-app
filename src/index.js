import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./Store";

// Creating a store from all the reducers

ReactDOM.render(
  <React.StrictMode>
    {/* Here we're giving the store state values to the app */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
