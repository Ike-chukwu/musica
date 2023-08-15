import React from "react";
import "./Home.scss";
import Latest from "../Components/Latest/Latest";
import Slider from "../Components/Slider/Slider";
import { AuthContext } from "../Components/context";
import { useContext } from "react";
import OpacityAnimation from "../Components/OpacityAnimation/OpacityAnimation";

const Home = () => {
  const firstUrl =
    "https://spotify81.p.rapidapi.com/playlist_tracks?id=37i9dQZF1DWX0o6sD1a6P5&offset=0&limit=100";
  const secondUrl =
    "https://spotify81.p.rapidapi.com/playlist_tracks?id=37i9dQZF1DWUHcUDX0za7N&offset=0&limit=100";

  return (
    <OpacityAnimation>
      <div className="home">
        <Latest />
        <Slider category="Trending Now" url={firstUrl} />
        <Slider category="Naija Bars" url={secondUrl} />
      </div>
    </OpacityAnimation>
  );
};

export default Home;
