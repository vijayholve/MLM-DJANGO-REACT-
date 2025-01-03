import { Link } from "react-router-dom"
const NavLink = ({symbol,title,link}) => {
  return (
    <>
      <span className="nav-item">
            < href=" {link}">
                <span className="material-symbols-outlined">{symbol}</span> 
                {title}
            </>
        </span>
    </>
    
  )
}

export default NavLink