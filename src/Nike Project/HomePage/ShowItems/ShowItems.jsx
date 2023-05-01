import React from "react";
import { Carousel } from "antd";
import "./ShowItem.css";
import BoxItem from "./BoxItem";
import BoxItem2 from "./BoxItem2";
import BoxItem3 from "./BoxItem3";

const ShowItems = (props) => {
  const { listShoesProduct } = props;

  return (
    <div className="show-item">
      <div className="container">
        <div className="title-show-items">
          <p>Top Kicks Under 200$</p>
          <button className="btn-shop">Shop</button>
        </div>

        <div className="box-show-items">
          <Carousel autoplay>
            <BoxItem listShoesProduct={listShoesProduct} />
            <BoxItem2 listShoesProduct={listShoesProduct} />
            <BoxItem3 listShoesProduct={listShoesProduct} />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default ShowItems;
