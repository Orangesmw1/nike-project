import React, { useEffect } from "react";
import Header from "./Header/Header";
import NavTop from "./NavTop/NavTop";
import ShopCarousel from "./ShopCarousel/ShopCarousel";
import Footer from "./Footer/Footer";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { callApi } from "./Redux/couterSlice";
import { callApiUser } from "./Redux/userSlice";

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

    axios({
      method: "get",
      url: "https://637b5d216f4024eac20b7454.mockapi.io/user-nike",
    }).then((response) => {
      if (response) {
        console.log("response", response.data);

        dispatch(callApiUser(response.data));
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
