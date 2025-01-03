import React from "react";
import NavLink from "./nav-link";

const Navbar = () => {
  return (
    <>
        <nav id="sidebarMenu" className="col-md-3 col-lg-3 d-md-block sidebar collapse">
                        <div className="position-sticky py-4 px-3 sidebar-sticky">
                            <ul className="nav flex-column h-100">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="index.html">
                                        <i className="bi-house-fill me-2"></i>
                                        Overview
                                    </a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link" href="wallet.html">
                                        <i className="bi-wallet me-2"></i>
                                        My Wallet
                                    </a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link" href="profile.html">
                                        <i className="bi-person me-2"></i>
                                        Profile
                                    </a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link" href="setting.html">
                                        <i className="bi-gear me-2"></i>
                                        Settings
                                    </a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link" href="help-center.html">
                                        <i className="bi-question-circle me-2"></i>
                                        Help Center
                                    </a>
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
    </>
  );
};

export default Navbar;
