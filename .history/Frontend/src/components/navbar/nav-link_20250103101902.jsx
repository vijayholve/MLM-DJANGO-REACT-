
const NavLink = ({symbol,title,link}) => {
  return (
    <>
      <span className="nav-item">
            <a href="{link}">
                <span className="material-symbols-outlined">{}</span> 
            </a>
        </span>
    </>
    
  )
}

export default NavLink
