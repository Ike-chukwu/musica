import React from "react";
import "./Home.scss";
import Latest from "../Components/Latest/Latest";
import Slider from "../Components/Slider/Slider";
import OpacityAnimation from "../Components/OpacityAnimation/OpacityAnimation";
import NaijaBarsSlider from "../Components/NaijaBarsSlider/NaijaBarsSlider";


const Home = () => {

  return (
    <OpacityAnimation>
      <div className="home">
        <Latest />
        <Slider category="Trending Now" />
        <NaijaBarsSlider category="Naija Bars" />
      </div>
    </OpacityAnimation>
  );
};

export default Home;
