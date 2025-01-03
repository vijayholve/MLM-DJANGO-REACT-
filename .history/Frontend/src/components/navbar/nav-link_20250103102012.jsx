
const NavLink = ({symbol,title,link}) => {
  return (
    <>
      <span className="nav-item">
            <a href=" {link}">
                <span className="material-symbols-outlined">{symbol}</span> 
                
            </a>
        </span>
    </>
    
  )
}

export default NavLink
