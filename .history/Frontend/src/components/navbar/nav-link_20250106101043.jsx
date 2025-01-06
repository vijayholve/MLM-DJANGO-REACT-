import React from 'react'
import na
const Nav_link = () => {
  return (
    <>
      <NavLink className={(e) =>
                      e.isActive ? "nav-link active" : "nav-link"
                    } to="/">
                    <i className="bi-house-fill me-2"></i>
                    Home
                  </NavLink>
    </>
  )
}

export default Nav_link
