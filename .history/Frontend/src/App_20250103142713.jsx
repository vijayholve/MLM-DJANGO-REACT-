import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Navbar from "./components/navbar/Navbar";
const App = () => {
  return (
    <Router>
      <Navbar/>
      <main className="col-md-9 ms-sm-auto col-lg-9 px-4">


        <Routes>
          <Route path="/"  element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
          </main>
    </Router>
  );
};

export default App;
