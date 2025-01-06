import React from 'react'
import { NavLink } from 'react-router-dom'
const Nav_link = ({,titlink}) => {
  return (
    <>
      <NavLink className={(e) =>
                      e.isActive ? "nav-link active" : "nav-link"
                    } to={link}>
                    <i className="bi-house-fill me-2"></i>
                    Home
                  </NavLink>
    </>
  )
}

export default Nav_link
