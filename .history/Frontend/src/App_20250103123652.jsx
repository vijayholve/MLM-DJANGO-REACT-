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
        <div className="container-fluid">
          <div className="row">
            <main className="col-md-9 ms-sm-auto py-4 col-lg-9 px-md-4 border-start"> {/* Main content */}
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
              </Routes>
          </div>
        </div>
      </>
    </Router>
  );
};

export default App;
