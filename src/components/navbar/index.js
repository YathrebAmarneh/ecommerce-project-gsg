import { AiOutlineHeart } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { AiOutlineLock } from "react-icons/ai";
import "./style.css";
import NavigationLinks from "./navigation-links";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left-navbar">
        <img alt="logo" src="assets/images/logo.png" />
        <NavigationLinks />
      </div>
      <div className="right-navbar">
        <a href="#login"> LOGIN</a>
        <FiSearch />
        <AiOutlineHeart />
        <AiOutlineLock />
      </div>
    </div>
  );
};

export default Navbar;
