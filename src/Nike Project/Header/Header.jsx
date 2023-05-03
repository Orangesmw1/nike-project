import React from "react";
import logo from "../../assist/image/logo.png";
import "./Header.css";
import { useSelector } from "react-redux";

const Header = () => {
  const listCart = useSelector((state) => state.counter.listShowCart);

  return (
    <div className="header flex items-center justify-between container">
      <div className="logo">
        <img src={logo} alt="" />
      </div>

      <nav className="nav-header">
        <ul>
          <li>New & Featured</li>
          <li>Men</li>
          <li>Woment</li>
          <li>Kids</li>
          <li>Sale</li>
          <li>SNKRS</li>
        </ul>
      </nav>

      <div className="box-userFuntion  flex items-center justify-between ">
        <div className="search">
          <button>
            <i className="fa fa-search"></i>
          </button>
          <input type="text" placeholder="Search" />
        </div>

        <div className="favorite">
          <i className=" fa fa-heart"></i>
        </div>
        <div className="cart">
          <i className="fa fa-shopping-cart"></i>
        </div>
      </div>
    </div>
  );
};

export default Header;
