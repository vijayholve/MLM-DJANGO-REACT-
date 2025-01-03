
const NavLink = ({symbol,title,}) => {
  return (
    <>
      <span className="nav-item">
            <a href="{% url 'admin-panel' %}">
                <span className="material-symbols-outlined">{}</span> 
            </a>
        </span>
    </>
    
  )
}

export default NavLink
