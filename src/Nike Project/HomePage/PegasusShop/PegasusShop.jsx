import React from "react";
import "./PegasusShop.css";

const PegasusShop = () => {
  return (
    <div className="pegasus-shop container">
      <div className="title">Welcome to the Pegasus Shop</div>
      <div className="box-img-store row-auto">
        <div className="women">
          <button className="btn-get-shop">Women's</button>
        </div>
        <div className="men">
          <button className="btn-get-shop">Men's</button>
        </div>
        <div className="kid">
          <button className="btn-get-shop">Kid's</button>
        </div>
      </div>
    </div>
  );
};

export default PegasusShop;
