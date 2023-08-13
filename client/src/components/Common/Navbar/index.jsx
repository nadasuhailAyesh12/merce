import React, { useState } from "react";
import Search from "../../product/search";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import "./style.css";

const Navbar = ({ showSearch }) => {
  const [showMobileNav, setShowMobileNav] = useState(false);
  const cartItems = useSelector((state) => state.cart.cartItems);

  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-white border-bottom">
      <span>
        <Link className="burgundy" to="/">
          Girly shop
        </Link>
      </span>

      <button className="navbar-toggler" type="button">
        <span
          className="navbar-toggler-icon"
          onClick={() => setShowMobileNav(!showMobileNav)}
        />
      </button>
      <div
        className={
          showMobileNav ? " navbar-collapse " : " navbar-collapse collapse"
        }
        id="navbarColor"
      >
        <ul className="navbar-nav">
          {showSearch && <Search />}

          <li className="nav-item ">
            <Link to="/cart">
              <div>
                <span className="fa-sharp fa-solid fa-cart-shopping cart"></span>
                <span className="badge">{cartItems.length}</span>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
