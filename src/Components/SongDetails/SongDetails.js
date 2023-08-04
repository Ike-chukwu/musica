import React from "react";
import "./SongDetails.scss";
import img from "../../images/AlbumCard-3.jpg";
import TopDetail from "../TopDetail/TopDetail";
import BottomDetail from "../BottomDetail/BottomDetail";

const SongDetails = () => {
  return (
    <div
      className="songDetails"
      style={{
        // backgroundColor: 'rgba(255, 255, 255, 0.5)',
        // backgroundImage: "url(" + img + ")",
        // backgroundRepeat: "no-repeat",
        // backgroundSize: "cover",
      }}
    >
      <TopDetail />
      <BottomDetail/>
    </div>
  );
};

export default SongDetails;
