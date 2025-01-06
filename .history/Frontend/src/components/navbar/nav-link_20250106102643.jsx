import React from 'react'
import { NavLink } from 'react-router-dom'
const Nav_link = ({title,link,icon}) => {
  return (
    <>
      <NavLink className={(e) =>
                      e.isActive ? "nav-link active" : "nav-link"
                    } to={link}>
                    <i className={(e) =>e.isActive? {icon} : {icon}'i-fill' }></i>
                    {title}
                  </NavLink>
    </>
  )
}

export default Nav_link
