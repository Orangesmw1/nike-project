import React from "react";
import "./TheEssentials.css";

const TheEssentials = () => {
  return (
    <div className="essentials-shop container">
      <div className="title">The Essentials</div>
      <div className="box-img-store row-auto">
        <div className="men">
          <button className="btn-get-shop">Men's</button>
        </div>
        <div className="women">
          <button className="btn-get-shop">Women's</button>
        </div>
        <div className="kid">
          <button className="btn-get-shop">Kid's</button>
        </div>
      </div>
    </div>
  );
};

export default TheEssentials;
