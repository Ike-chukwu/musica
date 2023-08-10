import React, { useContext, useEffect, useState } from "react";
import "./TopDetail.scss";
import img from "../../images/Lead-image.jpg";
import { AuthContext } from "../context";

const TopDetail = (props) => {
  const { globalMusicData, dataType } = useContext(AuthContext);
  const [itemInFocus, setItemInFocus] = useState(null);
  const [noOfTracks, setNoOfTracks] = useState(0);
  const [artistName, setArtistName] = useState("");
  const [cover, setCover] = useState("");
  const [tracks, setTracks] = useState([]);


  useEffect(() => {
    if (globalMusicData && dataType === "album") {
      const foundItem = globalMusicData.find((item) => item.id == props.id);
      if (foundItem) {
        setItemInFocus(foundItem);
        setNoOfTracks(foundItem.total_tracks);
        setArtistName(foundItem.artists[0].name);
        setCover(foundItem.images[0].url);
        setTracks(foundItem.tracks.items);
      }
    }
    else if (globalMusicData && dataType === "track") {
      const foundItem = globalMusicData.find((item) => item.id == props.id);
      if (foundItem) {
        setItemInFocus(foundItem);
        setNoOfTracks(1);
        setArtistName(foundItem.album.artists[0].name);
        setCover(foundItem.album.images[1].url);
        // setTracks(foundItem.tracks.items);
      }
    }
  }, [globalMusicData, dataType, props.id]);

  
  return (
    <div className="t-detail">
      <div className="left-part">
        <div className="pic">
          <img src={cover} alt="" />
        </div>
      </div>
      <div className="right">
        <div className="pack">
          <h2>{itemInFocus ? itemInFocus.name : "Loading..."}</h2>
          <p>
          {artistName}
          </p>
          <p>{`${noOfTracks} songs ~ 16 hrs+`}</p>
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
