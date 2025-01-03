import React from "react";
import { NavLink } from "react-router-dom";

const Navbar2 = () => {
  return (
    <header className="navbar sticky-top flex-md-nowrap">
      <div className="col-md-3 col-lg-3 me-0 px-3 fs-6">
        <NavLink className="navbar-brand" to="/">
          Mini Finance
        </NavLink>
      </div>

      <button
        className="navbar-toggler position-absolute d-md-none collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#sidebarMenu"
        aria-controls="sidebarMenu"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="dropdown px-3">
        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          <img src="images/medium-shot-happy-man-smiling.jpg" className="profile-image img-fluid" alt="" />
        </a>
        <ul className="dropdown-menu bg-white shadow">
          <li>
            <div className="dropdown-menu-profile-thumb d-flex">
              <img src="images/medium-shot-happy-man-smiling.jpg" className="profile-image img-fluid me-3" alt="" />
              <div className="d-flex flex-column">
                <small>Thomas</small>
                <a href="#">thomas@site.com</a>
              </div>
            </div>
          </li>

          <li>
            <NavLink className="dropdown-item" to="/profile">
              Profile
            </NavLink>
          </li>

          <li>
            <NavLink className="dropdown-item" to="/setting">
              Settings
            </NavLink>
          </li>

          <li>
            <NavLink className="dropdown-item" to="/help-center">
              Help
            </NavLink>
          </li>

          <li className="border-top mt-3 pt-2 mx-4">
            <NavLink className="dropdown-item ms-0 me-0" to="/logout">
              Logout
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

const Sidebar = () => {
  return (
    <nav id="sidebarMenu" className="col-md-3 col-lg-3 d-md-block sidebar collapse">
      <div className="position-sticky py-4 px-3 sidebar-sticky">
        <ul className="nav flex-column h-100">
          <li className="nav-item">
            <NavLink className="nav-link active" aria-current="page" to="/">
              Home
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="/about">
            about
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="/profile">
              Profile
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="/setting">
              Settings
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="/help-center">
              Help Center
            </NavLink>
          </li>

          <li className="nav-item border-top mt-auto pt-2">
            <NavLink className="nav-link" to="/logout">
              Logout
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export { Navbar2, Sidebar };
