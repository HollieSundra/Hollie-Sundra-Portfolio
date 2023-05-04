import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { HashRouter } from "react-router-dom";


ReactDOM.createRoot(document.getElementById("src")).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>,
  </React.StrictMode>
);

