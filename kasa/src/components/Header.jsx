import { Link } from "react-router-dom";
import logo from "../assets/kasa_logo-red.svg";

function Header() {
  return (
    <header className="header">
      <Link to="/">
        <img src={logo} alt="Kasa-logo" className="header__logo" />
      </Link>
      <nav className="header-nav">
        <Link className="header-nav__link" to="/">
          Accueil
        </Link>
        <Link className="header-nav__link" to="/about">
          À propos
        </Link>
      </nav>
    </header>
  );
}

export default Header;
