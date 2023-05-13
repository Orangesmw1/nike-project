import React, { useState } from "react";
import { Button, Popover } from "antd";
import PoperverAvaContent from "./PoperverAvaContent/PoperverAvaContent";

const PoperverAva = () => {
  const localUser = JSON.parse(localStorage.getItem("userLogin"));

  console.log("localUser", localUser);

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
      <p style={{ fontSize: "0.8rem", display: "inline-block" }}>
        Hi {localUser.lastname}
      </p>
      <i className="fa fa-user pl-2" style={{ fontSize: "1rem" }}></i>
    </Popover>
  );
};

export default PoperverAva;
