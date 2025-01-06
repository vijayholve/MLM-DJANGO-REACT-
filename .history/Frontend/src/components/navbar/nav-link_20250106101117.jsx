import React from 'react'
import { NavLink } from 'react-router-dom'
const Nav_link = ({title,link}) => {
  return (
    <>
      <NavLink className={(e) =>
                      e.isActive ? "nav-link active" : "nav-link"
                    } to={link}>
                    <i className="bi-house-fill me-2"></i>
                    {title}
                  </NavLink>
    </>
  )
}

export default Nav_link
