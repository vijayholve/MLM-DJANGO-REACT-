import React from 'react';
import './App.css'; // Assuming you have a CSS file for styling
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <header className="navbar sticky-top flex-md-nowrap">
        <div className="col-md-3 col-lg-3 me-0 px-3 fs-6">
          <a className="navbar-brand" href="index.html">
            <i className="bi-box"></i>
            Mini Finance
          </a>
        </div>

        <button className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <form className="custom-form header-form ms-lg-3 ms-md-3 me-lg-auto me-md-auto order-2 order-lg-0 order-md-0" action="#" method="get" role="form">
          <input className="form-control" name="search" type="text" placeholder="Search" aria-label="Search" />
        </form>
        
        <div className="navbar-nav me-lg-2">
          <div className="nav-item text-nowrap d-flex align-items-center">
            <div className="dropdown ps-3">
              <a className="nav-link dropdown-toggle text-center" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <i className="bi-bell"></i>
              </a>
              <ul className="dropdown-menu notifications-block-wrap bg-white shadow">
                <small>Notifications</small>
                <li className="notifications-block">
                  <a className="dropdown-item d-flex align-items-center" href="#">
                    <div className="notifications-icon-wrap bg-success">
                      <i className="notifications-icon bi-check-circle-fill"></i>
                    </div>
                    <div>
                      <span>Your account has been created successfully.</span>
                      <p>12 days ago</p>
                    </div>
                  </a>
                </li>
              </ul>
            </div>

            <div className="dropdown px-3">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <img src="images/medium-shot-happy-man-smiling.jpg" className="profile-image img-fluid" alt="Profile" />
              </a>
              <ul className="dropdown-menu bg-white shadow">
                <li>
                  <div className="dropdown-menu-profile-thumb d-flex">
                    <img src="images/medium-shot-happy-man-smiling.jpg" className="profile-image img-fluid me-3" alt="Profile Thumbnail" />
                    <div className="d-flex flex-column">
                      <small>Thomas</small>
                      <a href="#">thomas@site.com</a>
                    </div>
                  </div>
                </li>
                <li>
                  <a className="dropdown-item" href="profile.html">
                    <i className="bi-person me-2"></i>
                    Profile
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="setting.html">
                    <i className="bi-gear me-2"></i>
                    Settings
                  </a>
                </li>
                <li className="border-top mt-3 pt-2 mx-4">
                  <a className="dropdown-item ms-0 me-0" href="#">
                    <i className="bi-box-arrow-left me-2"></i>
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>

      <div className="container-fluid">
        <div className="row">
          <nav id="sidebarMenu" className="col-md-3 col-lg-3 d-md-block sidebar collapse">
            <div className="position-sticky py-4 px-3 sidebar-sticky">
              <ul className="nav flex-column h-100">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    <i className="bi-house-fill me-2"></i>
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  < className="nav-link" to="about.html">
                    <i className="bi-info-circle me-2"></i>
                    About
                  </>
                </li>
                <li className="nav-item border-top mt-auto pt-2">
                  <a className="nav-link" href="#">
                    <i className="bi-box-arrow-left me-2"></i>
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          </nav>

          {/* Content for Profile Page */}
          <main className="col-md-9 ms-sm-auto col-lg-9 px-4">
            <h2>Profile Page</h2>
            {/* Add your profile content here */}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
