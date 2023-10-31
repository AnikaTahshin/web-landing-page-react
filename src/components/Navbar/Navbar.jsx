import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import {
  AiOutlineSearch,
  // AiOutlineUser,
  // AiOutlineHeart,
  // AiOutlineShoppingCart,
} from "react-icons/ai";
import "./Navbar.scss";
const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">
        <img className="logo" src="../../assets/images/logo.png" alt="Logo" />
      </Link>

      <div className="search">
        <input className="input" type="text" placeholder="Search here" />

        <div className="search-icon">
          <AiOutlineSearch size={20} color="white" />
        </div>
      </div>
      <ul className="nav-links">
        <li>
          <HashLink
            style={{ color: "#fff", textDecoration: "none" }}
            to="#about"
          >
            About
          </HashLink>
        </li>
        <li>
          <HashLink
            style={{ color: "#fff", textDecoration: "none" }}
            to="#products"
          >
            Products
          </HashLink>
        </li>

        <li>
          <Link style={{ color: "#fff", textDecoration: "none" }} to="/contact">
            Contact
          </Link>
        </li>

        <li>
          <Link
            style={{ color: "#fff", textDecoration: "none" }}
            to="/services"
          >
            Services
          </Link>
        </li>
        <li>
          <HashLink
            style={{ color: "#fff", textDecoration: "none" }}
            to="#explore"
          >
            Explore
          </HashLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
