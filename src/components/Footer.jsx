import { Link } from "react-router-dom";
import logo from "../assets/kasa_logo-white.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-insert">
        <Link to="/" className="footer__link">
          <img src={logo} alt="Kasa-logo" className="footer__logo" />
        </Link>
        <p className="footer__text">© 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
