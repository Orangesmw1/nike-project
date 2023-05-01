import React from "react";
import logoNav from "../../assist/image/logo-top-nav.png";
import "./NavTop.css";

const NavTop = () => {
  return (
    <div className="top-nav flex items-center justify-between container">
      <img src={logoNav} alt="" />
      <div className="userAccount">
        <ul>
          <li>Find a Store</li>
          <li>Help</li>
          <li>Join Us</li>
          <li>Sign in</li>
        </ul>
      </div>
    </div>
  );
};

export default NavTop;
