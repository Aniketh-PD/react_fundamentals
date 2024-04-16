import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <img src={LOGO_URL} className="header-logo" />
      <div className="header-nav-links">
        <ul>
          <Link to={"/"}>
            <li>Home</li>
          </Link>
          <Link to={"/about"}>
            <li>About us</li>
          </Link>
          <Link to={"/contact"}>
            <li>Contact us</li>
          </Link>
          <Link to="/">
            <li>Cart</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
