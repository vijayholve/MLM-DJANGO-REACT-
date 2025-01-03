import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar2, Sidebar } from "./components/navbar"; // Make sure the path is correct
import About from "./pages/About";
import Home from "./pages/Home";
import './App.css'; // Ensure custom CSS is in place

const App = () => {
  return (
    <Router>
      <div>
        <Navbar2 />
        <div className="container-fluid">
          <div className="row">
            <Sidebar /> {/* Sidebar component */}
            <main className="col-md-9 ms-sm-auto py-4 col-lg-9 px-md-4 border-start"> {/* Main content */}
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
              </Routes>
            </main>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
