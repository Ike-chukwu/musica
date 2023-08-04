import React from "react";
import "./BottomDetail.scss";
import img from "../../images/Lead-image.jpg";

const BottomDetail = () => {
  return (
    <div className="b-detail">
      <div className="music-card">
        <div className="img-like">
          <div className="inner">
            <img src={img} alt="" />
            <i className="fas fa-heart"></i>
            <div className="text">
              <p>Let me love you ~ Krisx</p>
              <p>Single</p>
            </div>
          </div>
          <p className="song-text">Let me love you ~ Krisx</p>
        </div>
        <p className="category">Single</p>
        <p className="duration">2:30</p>
        <div className="options">
          <span className="options-btn">:</span>
          <div className="music-opt">
            <span className="options-btn-2">:</span>
            <span className="time">4:07</span>
          </div>
        </div>
      </div>
      <div className="music-card">
        <div className="img-like">
          <div className="inner">
            <img src={img} alt="" />
            <i className="fas fa-heart"></i>
            <div className="text">
              <p>Let me love you ~ Krisx</p>
              <p>Single</p>
            </div>
          </div>
          <p className="song-text">Let me love you ~ Krisx</p>
        </div>
        <p className="category">Single</p>
        <p className="duration">2:30</p>
        <div className="options">
          <span className="options-btn">:</span>
          <div className="music-opt">
            <span className="options-btn-2">:</span>
            <span className="time">4:07</span>
          </div>
        </div>
      </div>
      <div className="music-card">
        <div className="img-like">
          <div className="inner">
            <img src={img} alt="" />
            <i className="fas fa-heart"></i>
            <div className="text">
              <p>Let me love you ~ Krisx</p>
              <p>Single</p>
            </div>
          </div>
          <p className="song-text">Let me love you ~ Krisx</p>
        </div>
        <p className="category">Single</p>
        <p className="duration">2:30</p>
        <div className="options">
          <span className="options-btn">:</span>
          <div className="music-opt">
            <span className="options-btn-2">:</span>
            <span className="time">4:07</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomDetail;
