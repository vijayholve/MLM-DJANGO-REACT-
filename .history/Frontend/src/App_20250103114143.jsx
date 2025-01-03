import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar2, Sidebar } from "./components/navbar/navgation"; // Import your components
import About from "./pages/About";
import Home from "./pages/Home";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar2 />
        <div className="container-fluid">
          <div className="row">
            <Sidebar />
            <main className="main-wrapper col-md-9 ms-sm-auto py-4 col-lg-9 px-md-4 border-start">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/wallet" element={<About />} />
               
              </Routes>
            </main>
          </div>
        </div>
      </div>
    </Router>
  );
};


export default App;
