import React, { useState } from "react";
import { Button, Popover } from "antd";
import PoperverAvaContent from "./PoperverAvaContent/PoperverAvaContent";

const PoperverAva = () => {
  const [open, setOpen] = useState(false);

  const hide = () => {
    setOpen(false);
  };

  const handleOpenChange = (newOpen) => {
    setOpen(newOpen);
  };

  return (
    <Popover
      className="poper-ava"
      content={<PoperverAvaContent />}
      trigger="click"
      open={open}
      onOpenChange={handleOpenChange}
    >
      <img
        width={100}
        height={100}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsTY3dnw818v42oQ4urql3cTcRi-_2w6SYJg&usqp=CAU"
      />
    </Popover>
  );
};

export default PoperverAva;
