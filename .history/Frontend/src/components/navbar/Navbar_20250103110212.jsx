import React from "react";
import NavLink from "./nav-link";

const Navbar = () => {
  return (
    <>
        <nav id="sidebarMenu" class="col-md-3 col-lg-3 d-md-block sidebar collapse">
                        <div class="position-sticky py-4 px-3 sidebar-sticky">
                            <ul class="nav flex-column h-100">
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="index.html">
                                        <i class="bi-house-fill me-2"></i>
                                        Overview
                                    </a>
                                </li>

                                <li class="nav-item">
                                    <a class="nav-link" href="wallet.html">
                                        <i class="bi-wallet me-2"></i>
                                        My Wallet
                                    </a>
                                </li>

                                <li class="nav-item">
                                    <a class="nav-link" href="profile.html">
                                        <i class="bi-person me-2"></i>
                                        Profile
                                    </a>
                                </li>

                                <li class="nav-item">
                                    <a class="nav-link" href="setting.html">
                                        <i class="bi-gear me-2"></i>
                                        Settings
                                    </a>
                                </li>

                                <li class="nav-item">
                                    <a class="nav-link" href="help-center.html">
                                        <i class="bi-question-circle me-2"></i>
                                        Help Center
                                    </a>
                                </li>

                            

                                <li class="nav-item border-top mt-auto pt-2">
                                    <a class="nav-link" href="#">
                                        <i class="bi-box-arrow-left me-2"></i>
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
