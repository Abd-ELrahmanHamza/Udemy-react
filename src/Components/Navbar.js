// Import css
import "../Style/Components/Navbar.css";

// Import logo
import logo from "../Assets/Images/logo-udemy.svg";

// Import react icons
import { BsGlobe } from "react-icons/bs";
import { MdOutlineShoppingCart } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";
import { FaBars } from "react-icons/fa";

// Import react router dom
import {
  createSearchParams,
  useNavigate,
  useSearchParams,
} from "react-router-dom";

// Import hooks
import { useRef } from "react";

const Navbar = () => {
  // Used for navigation
  const navigate = useNavigate();

  // Reference for search input
  const searchRef = useRef();

  // Handler for search query
  const handleSearch = (event) => {
    event.preventDefault();
    navigate({
      pathname: "/",
      search: `?${createSearchParams({ course: searchRef.current.value })}`,
    });
  };
  return (
    <header className="nav-bar">
      <button className="my-btn search-small">
        <FaBars size={30} />
      </button>
      <div className="header-container">
        <div className="logo">
          <a href="\">
            <img src={logo} alt="Udemy logo" width="91" height="34"></img>
          </a>
        </div>
        <nav className="categories">Categories</nav>

        <div className="search-container">
          <form action="" className="search-form">
            <AiOutlineSearch className="search-icon" size={25} />
            <input
              type="text"
              placeholder="Search for anything"
              name="search"
              className="search-input"
              id="search-input"
              ref={searchRef}
            ></input>
            <input
              type="submit"
              value="search"
              className="my-btn submit-search"
              id="submit-search"
              onClick={handleSearch}
            ></input>
          </form>
        </div>
        <button className="my-btn search-small">
          <AiOutlineSearch size={25} />
        </button>

        <nav className="nav-links">
          <ul className="nav-links-ul">
            <li>
              {" "}
              <a href="/" className="nav-list-links business-nav">
                Udemy Business
              </a>
            </li>
            <li>
              {" "}
              <a href="/" className="nav-list-links teach-nav">
                Teach on Udemy
              </a>
            </li>
          </ul>
        </nav>
        <a href="/" className="my-btn cart-link">
          <MdOutlineShoppingCart size={30} />
        </a>
        <nav className="nav-btns">
          <ul>
            <li className="nav-list-btns">
              <a href="/" className="my-btn login">
                Log in
              </a>
            </li>
            <li className="nav-list-btns">
              <a href="/" className="my-btn signup">
                Sign up
              </a>
            </li>
            <li className="nav-list-btns">
              <a href="/" className="my-btn earth">
                <BsGlobe size={20} />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
