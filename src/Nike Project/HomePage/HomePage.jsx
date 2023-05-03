import React, { useEffect, useState } from "react";
import Carousel from "./Carousel/Carousel";
import PegasusShop from "./PegasusShop/PegasusShop";
import TheLatest from "./TheLatest/TheLatest";
import ShowItems from "./ShowItems/ShowItems";
import TheEssentials from "./TheEssentials/TheEssentials";
import TagFooter from "../Footer/TagFooter/TagFooter";
import "../Footer/Footer";

const HomePage = () => {
  return (
    <div>
      <Carousel />
      <PegasusShop />
      <TheLatest />
      <ShowItems />
      <TheEssentials />
      <TagFooter />
    </div>
  );
};

export default HomePage;
