import React from 'react'

const Header = () => {
  return (
    <>
      <header class="navbar sticky-top flex-md-nowrap">
                <div class="col-md-3 col-lg-3 me-0 px-3 fs-6">
                    <a class="navbar-brand" href="index.html">
                        <i class="bi-box"></i>
                        Mini Finance
                    </a>
                </div>

                <button class="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>


                        <div class="dropdown px-3">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <img src="images/medium-shot-happy-man-smiling.jpg" class="profile-image img-fluid" alt="">
                            <img src="" alt="" />
                            </a>
                            <ul class="dropdown-menu bg-white shadow">
                                <li>
                                    <div class="dropdown-menu-profile-thumb d-flex">
                                        <img src="images/medium-shot-happy-man-smiling.jpg" class="profile-image img-fluid me-3" alt="">

                                        <div class="d-flex flex-column">
                                            <small>Thomas</small>
                                            <a href="#">thomas@site.com</a>
                                        </div>
                                    </div>
                                </li>

                                <li>
                                    <a class="dropdown-item" href="profile.html">
                                        <i class="bi-person me-2"></i>
                                        Profile
                                    </a>
                                </li>

                                <li>
                                    <a class="dropdown-item" href="setting.html">
                                        <i class="bi-gear me-2"></i>
                                        Settings
                                    </a>
                                </li>

                                <li>
                                    <a class="dropdown-item" href="help-center.html">
                                        <i class="bi-question-circle me-2"></i>
                                        Help
                                    </a>
                                </li>

                                <li class="border-top mt-3 pt-2 mx-4">
                                    <a class="dropdown-item ms-0 me-0" href="#">
                                        <i class="bi-box-arrow-left me-2"></i>
                                        Logout
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
    </>
  )
}

export default header
