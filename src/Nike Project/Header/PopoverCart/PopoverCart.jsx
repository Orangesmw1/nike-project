import { Popover } from "antd";
import React, { useState } from "react";
import PopoverContent from "./PopoverContent/PopoverContent";
import { useSelector } from "react-redux";

const PopoverCart = () => {
  const [open, setOpen] = useState(false);
  const listCart = useSelector((state) => state.counter.listShowCart);

  const handleOpenChange = (newOpen) => {
    if (listCart.length > 0) {
      setOpen(newOpen);
    }
  };

  const hide = (value) => {
    setOpen(false);
  };

  return (
    <Popover
      content={<PopoverContent hide={hide} />}
      trigger="click"
      open={open}
      onOpenChange={handleOpenChange}
    >
      <div className="cart">
        <i className="fa fa-shopping-cart"></i>
        {listCart.length ? <span>{listCart.length}</span> : null}
      </div>
    </Popover>
  );
};

export default PopoverCart;
