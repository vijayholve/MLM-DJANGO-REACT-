
const NavLink = ({symbol}) => {
  return (
    <>
      <span className="nav-item">
            <a href="{% url 'admin-panel' %}">
                <span className="material-symbols-outlined">{}</span> admin Profile
            </a>
        </span>
    </>
    
  )
}

export default NavLink
