import React, { useEffect } from "react";
import Header from "./Header/Header";
import NavTop from "./NavTop/NavTop";
import ShopCarousel from "./ShopCarousel/ShopCarousel";
import Footer from "./Footer/Footer";
import axios from "axios";
import { useDispatch } from "react-redux";
import { callApi } from "./Redux/couterSlice";

const NikeProject = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    axios({
      method: "get",
      url: "https://shop.cyberlearn.vn/api/Product",
    }).then((response) => {
      if (response) {
        dispatch(callApi(response.data.content));
      }
    });
  }, []);

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
