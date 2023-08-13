import React, { useEffect, useState, useContext } from "react";
import "./Collection.scss";
import MCollection from "../Components/MCollection/MCollection";
import BtnPack from "../Components/BtnPack/BtnPack";
import { AuthContext } from "../Components/context";

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
  );
};

export default Collection;
