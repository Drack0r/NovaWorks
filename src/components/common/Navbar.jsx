import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="nav">
      <ul className="nav-list">
        <li className="nav-item">
          <Link to={"/history"} className="nav-link">
            Historique
          </Link>
        </li>
        <li className="nav-item">
          <Link to={"/"} className="nav-link">
            Accueil
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
