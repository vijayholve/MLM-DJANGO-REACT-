import { Link } from "react-router-dom"
const NavLink = ({symbol,title,link}) => {
  return (
    <>
      <span className="nav-item">
            <a href=" {link}">
                <span className="material-symbols-outlined">{symbol}</span> 
                {title}
            </a>
        </span>
    </>
    
  )
}

export default NavLink
