import React, { useState, useContext } from "react";
import "./BtnPack.scss";
import { AuthContext } from "../context";

const BtnPack = () => {
  const {activeButton, setActiveButton} = useContext(AuthContext)
  const pages = ["collection", "likes"];

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
