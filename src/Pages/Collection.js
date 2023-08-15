import React, { useEffect, useState, useContext } from "react";
import "./Collection.scss";
import MCollection from "../Components/MCollection/MCollection";
import BtnPack from "../Components/BtnPack/BtnPack";
import { AuthContext } from "../Components/context";
import OpacityAnimation from "../Components/OpacityAnimation/OpacityAnimation";

const Collection = () => {
  const {
    globalMusicData,
    collection,
    setCollection,
    setGlobalMusicData,
    likes,
    setlikes,
  } = useContext(AuthContext);

  return (
    <OpacityAnimation>
      <div className="collection">
        <BtnPack />
        <MCollection
          collection={collection}
          setCollection={setCollection}
          globalMusicData={globalMusicData}
          setGlobalMusicData={setGlobalMusicData}
          likes={likes}
          setlikes={setlikes}
        />
      </div>
    </OpacityAnimation>
  );
};

export default Collection;
