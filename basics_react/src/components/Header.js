import { useSelector } from "react-redux";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between shadow-lg bg-orange-100">
      <img src={LOGO_URL} className="w-56" />
      <div>
        <ul className="flex items-center m-4 p-4">
          <Link to={"/"} className="m-4 p-4">
            <li>Home</li>
          </Link>
          <Link to={"/about"} className="m-4 p-4">
            <li>About us</li>
          </Link>
          <Link to={"/contact"} className="m-4 p-4">
            <li>Contact us</li>
          </Link>
          <Link to="/cart" className="m-4 p-4">
            <li>Cart({cartItems.length})</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
