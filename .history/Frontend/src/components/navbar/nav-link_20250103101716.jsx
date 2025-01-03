
const NavLink = () => {
  return (
    <div>
      <span className="nav-item">
            <a href="{% url 'admin-panel' %}">
                <span className="material-symbols-outlined">account_circle</span> admin Profile
            </a>
        </span>
    </div>
    <div className="hi"></div>
  )
}

export default NavLink
