import React from "react";
import "./Latest.scss";
import artist from "../../images/Pexels Photo by Eric Esma.png";
import p1 from "../../images/Ellipse 2.png";
import p2 from "../../images/Ellipse 3.png";
import p3 from "../../images/Ellipse 4.png";
import p4 from "../../images/Ellipse 5.png";
import p5 from "../../images/Ellipse 6.png";
import TopCharts from "../TopCharts/TopCharts";

const Latest = () => {
  return (
    <div className="home-container">
      <div className="blue-container">
        <div className="left">
          <span className="title">Currated Playlist</span>
          <div className="middle">
            <h3>R & B Hits</h3>
            <span>
              All mine, Lie again, Petty call me everyday, Out of time, No love,
              Bad habit, and so much more
            </span>
          </div>
          <div className="imgs-likes">
            <div className="img-pack">
              <img src={p1} alt="" />
              <img src={p2} alt="" />
              <img src={p3} alt="" />
              <img src={p4} alt="" />
              <img src={p5} alt="" />
            </div>
            <div className="stats">
              <i className="fas fa-heart"></i>
              <span>33k Likes</span>
            </div>
          </div>
        </div>
        <div className="right">
          <img src={artist} alt="" />
        </div>
      </div>
      <TopCharts/>
    </div>
  );
};

export default Latest;
