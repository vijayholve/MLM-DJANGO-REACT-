import { Link } from "react-router-dom";
import './styles.css'
const NavLink = ({ symbol, title, link }) => {
  return (
   
    <li className="nav-item">
    <Link className="nav-link active" aria-current="page" href="index.html" to={link}>
        {/* <i className="bi-house-fill me-2"></i> */}
        {title}
    </Link>
</li>
  );
};

export default NavLink;
