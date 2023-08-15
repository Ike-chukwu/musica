import React from "react";
import img from "../../images/under-construction-28973.png";
import "./UnderConstruction.scss";
import OpacityAnimation from "../OpacityAnimation/OpacityAnimation";

const UnderConstruction = () => {
  return (
    <OpacityAnimation>
      <div className="images">
        <img src={img} alt="" />
        <div className="text-pack">
          <p className="error-message">Sorry!</p>
          <p className="error-message">This page is under construction</p>
        </div>
      </div>
    </OpacityAnimation>
  );
};

export default UnderConstruction;
