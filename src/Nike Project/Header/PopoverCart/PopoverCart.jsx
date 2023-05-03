import { Popover } from "antd";
import React, { useState } from "react";
import PopoverContent from "./PopoverContent/PopoverContent";

const PopoverCart = () => {
  const [open, setOpen] = useState(false);

  const hide = () => {
    setOpen(false);
  };

  const handleOpenChange = (newOpen) => {
    setOpen(newOpen);
  };

  return (
    <Popover
      content={<PopoverContent />}
      trigger="click"
      open={open}
      onOpenChange={handleOpenChange}
    >
      <div className="cart">
        <i className="fa fa-shopping-cart"></i>
      </div>
    </Popover>
  );
};

export default PopoverCart;
