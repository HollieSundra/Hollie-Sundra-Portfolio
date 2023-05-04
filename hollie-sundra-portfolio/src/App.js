import React from "react";
import { ReactDOM } from "react-dom";
import "./index.css";
import Home from "./routes/Home";
import About from "./routes/About";
import Project from "./routes/Project";
import Contact from "./routes/Contact";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Routes } from 'react-router-dom';


ReactDOM.render(
  <Router basename={process.env.PUBLIC_URL}>< App /></Router>,
  document.getElementById('root')
);


function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/project" element={<Project />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    </>
  );
}

export default App;
