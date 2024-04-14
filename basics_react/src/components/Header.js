import { LOGO_URL } from "../utils/constants";

const Header = () => {
    return (
      <div className="header">
        <img
          src={LOGO_URL}
          className="header-logo"
        />
        <div className="header-nav-links">
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;