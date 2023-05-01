import React from "react";
import "./TheLatest.css";
import videoLatest from "../../../assist/video/Nike.-Just-Do-It.-Nike-VN.mp4";

const TheLatest = () => {
  return (
    <div className="the-latest">
      <div className="container">
        <p className="title-latest">The Latest</p>
        <div className="box-video">
          <video autoPlay muted loop>
            <source src={videoLatest} />
          </video>
          <div className="content">
            <p>Nike Bras</p>
            <h3>
              ENGINEERED TO
              <br />
              FEEL MORE YOU
            </h3>
            <p>Bras for movement and every moment in between.</p>

            <button>Shop</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheLatest;
