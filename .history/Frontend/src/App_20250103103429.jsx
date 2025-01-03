import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
 <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={} />
        <Route path="/profile"  />
      </Routes>
    </Router> 
       </>
  );
}

export default App;
