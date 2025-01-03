import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import ProfilePage from "./components/navbar/PorfilePage";
import './App.css';
const App = () => {
  return (
    <Router>
      <>
       =
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
              </Routes>
          
      </>
    </Router>
  );
};

export default App;
