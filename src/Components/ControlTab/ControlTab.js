import React from "react";
import "./ControlTab.scss";
import imageTry from "../../images/Rectangle 14.jpg";

const ControlTab = () => {
  return (
    <div className="controls">
      <div className="music-details">
        <img src={imageTry} alt="" />
        <div className="info">
          <p className="song-name">Seasons in</p>
          <p className="artist">Aitch</p>
        </div>
      </div>
      <div className="play-controls">
        <div className="top">
          <i class="fas fa-shuffle"></i>
          <i class="fa fa-caret-left"></i>
          <i class="fas fa-play"></i>
          {/* <i class="fas fa-pause"></i> */}
          <i class="fa fa-caret-right"></i>
          <i class="fa fa-repeat"></i>
        </div>
        <input type="range" />
      </div>
      <div className="volume-controls">
        <i class="fas fa-volume-up"></i>
        <input type="range" />
      </div>
    </div>
  );
};

export default ControlTab;
