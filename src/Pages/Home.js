import React from "react";
import "./Home.scss";
import Latest from "../Components/Latest/Latest";
import Slider from "../Components/Slider/Slider";
import { AuthContext } from "../Components/context";
import { useContext } from "react";

const Home = () => {


  const firstUrl = "https://spotify81.p.rapidapi.com/playlist_tracks?id=37i9dQZF1DWX0o6sD1a6P5&offset=0&limit=100"
  const firstOptions = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "83d16f10efmsh798c2687b6a1e69p1861cejsnb955344b3b13",
      "X-RapidAPI-Host": "spotify81.p.rapidapi.com",
    },
  }



  const { title, mData } = useContext(AuthContext);
  return (
    <div className="home">
      <Latest />
      <Slider category={title} music={mData}/>
      <Slider category="Popular in your area" />
    </div>
  );
};

export default Home;
