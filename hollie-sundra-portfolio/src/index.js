import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, BrowserRouter as Router } from "react-router-dom";


ReactDOM.render(
  <Router basename={process.env.PUBLIC_URL}>
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  </Router>, 
    document.getElementById("root")
);

