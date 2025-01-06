import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Navbar from "./components/navbar/Navbar";
import CreateUser from "./form/CreateUser";
import MLMTree from "./pages/BinaryTree";
import MainTable from "./components/table/Table";
const App = () => {
  return (
    <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/register-form" element={<CreateUser />} />
          <Route path="/mlm-tree/" element={<MLMTree />} />
          <Route path="/all-users" element={<MainTable />}/>
        </Routes>
      </main>
    </Router>
  );
};

export default App;
