import React from "react";
import NavLink from "./nav-link";

const Navbar = () => {
  return (
    <>
      <div className="nav-container">
        <nav className="menu" id="nav">
          <NavLink symbol="🏠" title="Home" link="/" />
          <NavLink symbol="📚" title="About" link="/about" />
          <NavLink symbol="📚" title="Services" link="/services" />
          <NavLink symbol="📚" title="Contact" link="/contact" />
          
        </nav>
      </div>
    </>
  );
};

export default Navbar;
