import React, { useState } from "react";
import "./BtnPack.scss";

const BtnPack = () => {
  const pages = ["collection", "likes"];
  const [activeButton, setActiveButton] = useState("collection");

  return (
    <div className="btns">
      {pages.map((item) => {
        return (
          <button
            onClick={() => setActiveButton(item)}
            className={item == activeButton ? "button  active" : "button"}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
};

export default BtnPack;
