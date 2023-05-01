import React from "react";
import "./Carousel.css";
import imageCarousel from "../../../assist/image/img-carousel.jpg";

const Carousel = () => {
  return (
    <div className="carousel">
      <div className="container">
        <img src={imageCarousel} alt="" />
        <div className="nike-pegasus-shop">
          <p className="pt-6">Nike Pegasus 40</p>
          <h3>
            The World Runs
            <br />
            In Pegasus.
          </h3>
          <p className="pt-4">
            Meet the latest update to the shoe that’s been trusted by runners of
            all kinds for four decades.
          </p>

          <button className="btn-shop">Shop</button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
