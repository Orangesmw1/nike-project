import React, { useEffect, useState } from "react";
import Carousel from "./Carousel/Carousel";
import PegasusShop from "./PegasusShop/PegasusShop";
import TheLatest from "./TheLatest/TheLatest";
import ShowItems from "./ShowItems/ShowItems";
import axios from "axios";
import TheEssentials from "./TheEssentials/TheEssentials";

const HomePage = () => {
  const [listShoesProduct, setListShoesProduct] = useState([]);

  useEffect(() => {
    axios({
      method: "get",
      url: "https://shop.cyberlearn.vn/api/Product",
    }).then((response) => {
      if (response) {
        setListShoesProduct(response.data.content);
      }
    });
  }, []);

  return (
    <div>
      <Carousel />
      <PegasusShop />
      <TheLatest />
      <ShowItems listShoesProduct={listShoesProduct} />
      <TheEssentials />
    </div>
  );
};

export default HomePage;
