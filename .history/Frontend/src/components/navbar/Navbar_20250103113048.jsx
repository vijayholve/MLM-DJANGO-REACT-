import React from "react";
import NavLink from "./nav-link";

const Navbar = () => {
  return (
    <>
       <nav id="sidebarMenu" class="col-md-3 col-lg-3 d-md-block sidebar collapse">
                    <div class="position-sticky py-4 px-3 sidebar-sticky">
                        <ul class="nav flex-column h-100">
                              <NavLink link="/" title="Home" />
                              <NavLink link="/about" title="About" />
                            </ul>
                        </div>
                    </nav>
    </>
  );
};

export default Navbar;
