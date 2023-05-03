import React from "react";
import { Carousel } from "antd";
import "./ShowItem.css";
import BoxItem from "./BoxItem";
import BoxItem2 from "./BoxItem2";
import BoxItem3 from "./BoxItem3";
import { useSelector } from "react-redux";

const ShowItems = () => {
  const listProduct = useSelector((state) => state.counter.listProduct);

  return (
    <div className="show-item">
      <div className="container">
        <div className="title-show-items">
          <p>Top Kicks Under 200$</p>
          <button className="btn-shop">Shop</button>
        </div>

        <div className="box-show-items">
          <Carousel autoplay>
            <BoxItem listProduct={listProduct} />
            <BoxItem2 listProduct={listProduct} />
            <BoxItem3 listProduct={listProduct} />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default ShowItems;
