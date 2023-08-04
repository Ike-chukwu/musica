import React from "react";
import './Collection.scss'
import MCollection from "../Components/MCollection/MCollection";
import BtnPack from "../Components/BtnPack/BtnPack";

const Collection = () => {
  return (
    <div className="collection">
      <BtnPack/>
      <MCollection/>
    </div>
  );
};

export default Collection;
