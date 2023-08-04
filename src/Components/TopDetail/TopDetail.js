import React from "react";
import "./TopDetail.scss";
import img from "../../images/Lead-image.jpg";


const TopDetail = () => {
  return (
    <div className="t-detail">
      <div className="left-part">
        <div className="pic">
          <img src={img} alt="" />
        </div>
      </div>
      <div className="right">
        <div className="pack">
          <h2>Tomorrow’s tunes</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis
          </p>
          <p>64 songs ~ 16 hrs+</p>
        </div>
        <div className="btn-pack">
          <div className="btn">
            <i className="fas fa-play"></i>
            <span>Play all</span>
          </div>
          <div className="btn">
            <i className="fas fa-box"></i>
            <span>Add to collection</span>
          </div>
          <div className="btn">
            <i className="fas fa-heart"></i>
            <span>Like</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopDetail;
