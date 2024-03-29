import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Provider } from "react-redux";
import App from "./App";
import "./App.css";
import * as serviceWorker from "./serviceWorker";
import store from "./store/index";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(

  <Provider store={store}>
    <div id="provider" >
      <App />
    </div>
    </Provider>
    , document.getElementById("root")
   
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
