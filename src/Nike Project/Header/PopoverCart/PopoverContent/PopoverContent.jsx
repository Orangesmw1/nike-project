import React from "react";
import "./PopoverContent.css";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const PopoverContent = (props) => {
  const listCart = useSelector((state) => state.counter.listShowCart);

  const { hide } = props;

  return (
    <div className="popover-content">
      {listCart?.map((item) => {
        return (
          <div className="box-content" key={item.id}>
            <div className="box-img-popover">
              <img className="img-popover" src={item.image} alt="" />
            </div>
            <ul>
              <li>{item.name}</li>
              <li>Size EU {item.sizeDetail}</li>
              <li>Quantity: {item.count}</li>
              <li>{item.price * item.count}$</li>
            </ul>
          </div>
        );
      })}

      <div className="box-viewbag-checkout">
        <NavLink
          to={"/bag"}
          style={{ width: "48%" }}
          onClick={() => hide(false)}
        >
          <button className="view-bag">View Bags ({listCart.length}) </button>
        </NavLink>
        <NavLink
          to={"/bag"}
          style={{ width: "48%" }}
          onClick={() => hide(false)}
        >
          <button className="check-out">Check out</button>
        </NavLink>
      </div>
    </div>
  );
};

export default PopoverContent;
