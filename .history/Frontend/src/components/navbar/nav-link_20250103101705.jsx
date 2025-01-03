
const NavLink = () => {
  return (
    <div>
      <span class="nav-item">
            <a href="{% url 'admin-panel' %}">
                <span class="material-symbols-outlined">account_circle</span> admin Profile
            </a>
        </span>
    </div>
  )
}

export default NavLink
