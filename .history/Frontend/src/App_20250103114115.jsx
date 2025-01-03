import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar, Sidebar } from "./components/navbar/navgation"; // Import your components
import About from "./pages/About";
import Home from "./pages/Home";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
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

const Overview = () => <h1>Overview Page</h1>;
const Wallet = () => <h1>Wallet Page</h1>;
const Profile = () => <h1>Profile Page</h1>;
const Setting = () => <h1>Setting Page</h1>;
const HelpCenter = () => <h1>Help Center Page</h1>;
const Logout = () => <h1>Logout Page</h1>;

export default App;
