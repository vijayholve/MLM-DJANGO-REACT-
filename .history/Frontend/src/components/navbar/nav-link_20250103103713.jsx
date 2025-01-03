import { Link } from "react-router-dom"
const NavLink = ({symbol,title,link}) => {
  return (
    <>
      <span className="nav-item">
            <Link href=" {link}">
                <span className="material-symbols-outlined">{symbol}</span> 
                {title}
            </Link>
        </span>
    </>
    
  )
}

export default NavLink
