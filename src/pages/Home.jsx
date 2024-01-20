import React from "react";
import SlickSlider from "../components/slider/SlickSlider";
import Homeproduct from "../components/home/Homeproduct";
import Homeproject from "../components/home/Homeproject";
import HomeSection from "../components/home/HomeSection";

const Home = () => {
  return (
    <>
      <SlickSlider />
      <Homeproduct />
      <Homeproject />
      <HomeSection />
    </>
  );
};

export default Home;
