import React from "react";
import NavLink from "./nav-link";
import './styles.css'

const Navbar = () => {
  return (
    <>
        <nav id="sidebarMenu" className="col-md-3 col-lg-3 d-md-block sidebar collapse">
                        <div className="position-sticky py-4 px-3 sidebar-sticky">
                            <ul className="nav flex-column h-100">
                              <NavLink link="/" title="Home" />
                              <NavLink link="/about" title="About" />
                            </ul>
                        </div>
                    </nav>
    </>
  );
};

export default Navbar;