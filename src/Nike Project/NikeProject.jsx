import React, { useEffect, useState } from "react";
import Header from "./Header/Header";
import NavTop from "./NavTop/NavTop";
import ShopCarousel from "./ShopCarousel/ShopCarousel";
import Footer from "./Footer/Footer";
import axios from "axios";

const NikeProject = ({ children }) => {
  return (
    <div>
      <NavTop />
      <Header />
      <ShopCarousel />
      {children}
      <Footer />
    </div>
  );
};

export default NikeProject;
