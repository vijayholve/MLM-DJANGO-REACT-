import React from "react";
import NavLink from "./nav-link";

const Navbar = () => {
  return (
    <>
      <div className="nav-container">
        <nav className="menu" id="nav">
          <NavLink symbol="🏠" title="Home" link="/" />
          
        </nav>
      </div>
    </>
  );
};

export default Navbar;
