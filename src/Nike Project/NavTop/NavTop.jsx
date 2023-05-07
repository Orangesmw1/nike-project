import React from "react";
import logoNav from "../../assist/image/logo-top-nav.png";
import "./NavTop.css";
import { Link } from "react-router-dom";

const NavTop = () => {
  return (
    <div className="top-nav flex items-center justify-between container">
      <img src={logoNav} alt="" />
      <div className="userAccount">
        <ul>
          <li>Find a Store</li>
          <li>Help</li>
          <li>
            <Link to="/register">Join Us</Link>
          </li>

          <li>
            <Link to="/login">Sign in</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavTop;
