import React from "react";
import NavLink from "./nav-link";

const Navbar = () => {
  return (
    <>
        <nav id="sidebarMenu" Na="col-md-3 col-lg-3 d-md-block sidebar collapse">
                        <div Na="position-sticky py-4 px-3 sidebar-sticky">
                            <ul Na="nav flex-column h-100">
                                <li Na="nav-item">
                                    <a Na="nav-link active" aria-current="page" href="index.html">
                                        <i Na="bi-house-fill me-2"></i>
                                        Overview
                                    </a>
                                </li>

                                <li Na="nav-item">
                                    <a Na="nav-link" href="wallet.html">
                                        <i Na="bi-wallet me-2"></i>
                                        My Wallet
                                    </a>
                                </li>

                                <li Na="nav-item">
                                    <a Na="nav-link" href="profile.html">
                                        <i Na="bi-person me-2"></i>
                                        Profile
                                    </a>
                                </li>

                                <li Na="nav-item">
                                    <a Na="nav-link" href="setting.html">
                                        <i Na="bi-gear me-2"></i>
                                        Settings
                                    </a>
                                </li>

                                <li Na="nav-item">
                                    <a Na="nav-link" href="help-center.html">
                                        <i Na="bi-question-circle me-2"></i>
                                        Help Center
                                    </a>
                                </li>

                            

                                <li Na="nav-item border-top mt-auto pt-2">
                                    <a Na="nav-link" href="#">
                                        <i Na="bi-box-arrow-left me-2"></i>
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
