import React from "react";
import "./PopoverContent.css";
import { useSelector } from "react-redux";

const PopoverContent = () => {
  const listCart = useSelector((state) => state.counter.listShowCart);

  return (
    <div className="popover-content">
      {listCart?.map((item) => {
        return (
          <div className="box-content" key={item.id}>
            <div className="box-img-popover">
              <img
                src="	https://shop.cyberlearn.vn/images/adidas-prophere.png"
                alt=""
              />
            </div>
            <ul>
              <li>Name</li>
              <li>Size EU 45</li>
              <li>20000$</li>
            </ul>
          </div>
        );
      })}

      <div className="box-viewbag-checkout">
        <button className="view-bag">View Bags (1)</button>
        <button className="check-out">Check out</button>
      </div>
    </div>
  );
};

export default PopoverContent;
