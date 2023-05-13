import React from "react";
import "./PoperverAvaContent.css";
import { useNavigate } from "react-router-dom";

const PoperverAvaContent = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("userLogin");
    navigate("/login");
  };

  return (
    <div className="poper-ava-content">
      <ul>
        <li>Info</li>
        <li onClick={() => handleLogout()}>Logout</li>
      </ul>
    </div>
  );
};

export default PoperverAvaContent;
