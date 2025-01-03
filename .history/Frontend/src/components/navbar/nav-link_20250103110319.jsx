import { Link } from "react-router-dom";

const NavLink = ({ symbol, title, link }) => {
  return (
    <span className="nav-item">
      <Link to={link}>
        <span className="material-symbols-outlined">{symbol}</span>
        {title}
      </Link>
    </span>
    <li className="nav-item">
    <Link className="nav-link active" aria-current="page" href="index.html">
        <i className="bi-house-fill me-2"></i>
        Overview
    </Link>
</li>
  );
};

export default NavLink;
