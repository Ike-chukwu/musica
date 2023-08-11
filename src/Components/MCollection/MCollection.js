import React, { useEffect, useContext } from "react";
import "./MCollection.scss";
import img from "../../images/AlbumCard-3.jpg";
import { AuthContext } from "../context";
import { useNavigate } from "react-router-dom";

const MCollection = (props) => {
  const navigate = useNavigate();

  const {
    globalMusicData,
    setGlobalMusicData,
    dataType,
    setDataType,
    setMdata,
    collection,
    setCollection,
    fromCollection,
    setFromCollection,
    clickedItemFromCollection,
    setClickedclickedItemFromCollection,
    activeButton,
    setActiveButton,
    likes,
    setlikes,
    fromlikes,
    setFromLikes,
    clickedItemFromLikes,
    setClickedclickedItemFromLikes,

  } = useContext(AuthContext);

  let collectionData;
  
  if(activeButton ==  "collection"){
    const renderDataInSongDetail = (id, itemInFocus, type) => {
      setFromCollection(true);
      setGlobalMusicData(itemInFocus);
      setDataType(type);
      navigate(`/song/${id}`);
    };
  
    if (props.collection) {
      collectionData = props.collection.map((music) => {
        return (
          <div
            className="picked"
            onClick={() =>
              renderDataInSongDetail(
                music.identification,
                music.itemInFocus,
                music.dataType
              )
            }
          >
            <img src={music.image} alt="" />
            <div className="inner-picked">
              <div className="left">
                <h4>{music.nameOfSong}</h4>
                <p className="nam">{music.artist}</p>
                <p className="name">23m likes </p>
              </div>
              <div className="i fas fa-play"></div>
            </div>
          </div>
        );
      });
    }
  }
  else if(activeButton== "likes"){
    const renderDataInSongDetail = (id, itemInFocus, type) => {
      setFromLikes(true);
      setGlobalMusicData(itemInFocus);
      setDataType(type);
      navigate(`/song/${id}`);
    };
  
    if (props.likes) {
      collectionData = props.likes.map((music) => {
        return (
          <div
            className="picked"
            onClick={() =>
              renderDataInSongDetail(
                music.identification,
                music.itemInFocus,
                music.dataType
              )
            }
          >
            <img src={music.image} alt="" />
            <div className="inner-picked">
              <div className="left">
                <h4>{music.nameOfSong}</h4>
                <p className="nam">{music.artist}</p>
                <p className="name">23m likes </p>
              </div>
              <div className="i fas fa-play"></div>
            </div>
          </div>
        );
      });
    }
  }

  console.log(collectionData);



  return (
    <div className="m-collection">
      {collectionData}
      {/* <div className="picked">
        <img src={img} alt="" />
        <div className="inner-picked">
          <div className="left">
            <h4>Song Title</h4>
            <p className="nam">Lolade</p>
            <p className="name">23m likes </p>
          </div>
          <div className="i fas fa-play"></div>
        </div>
      </div>
      <div className="picked">
        <img src={img} alt="" />
        <div className="inner-picked">
          <div className="left">
            <h4>Song Title</h4>
            <p className="nam">Lolade</p>
            <p className="name">23m likes </p>
          </div>
          <div className="i fas fa-play"></div>
        </div>
      </div>
      <div className="picked">
        <img src={img} alt="" />
        <div className="inner-picked">
          <div className="left">
            <h4>Song Title</h4>
            <p className="nam">Lolade</p>
            <p className="name">23m likes </p>
          </div>
          <div className="i fas fa-play"></div>
        </div>
      </div>
      <div className="picked">
        <img src={img} alt="" />
        <div className="inner-picked">
          <div className="left">
            <h4>Song Title</h4>
            <p className="nam">Lolade</p>
            <p className="name">23m likes </p>
          </div>
          <div className="i fas fa-play"></div>
        </div>
      </div>
      <div className="picked">
        <img src={img} alt="" />
        <div className="inner-picked">
          <div className="left">
            <h4>Song Title</h4>
            <p className="nam">Lolade</p>
            <p className="name">23m likes </p>
          </div>
          <div className="i fas fa-play"></div>
        </div>
      </div>
      <div className="picked">
        <img src={img} alt="" />
        <div className="inner-picked">
          <div className="left">
            <h4>Song Title</h4>
            <p className="nam">Lolade</p>
            <p className="name">23m likes </p>
          </div>
          <div className="i fas fa-play"></div>
        </div>
      </div>
      <div className="picked">
        <img src={img} alt="" />
        <div className="inner-picked">
          <div className="left">
            <h4>Song Title</h4>
            <p className="nam">Lolade</p>
            <p className="name">23m likes </p>
          </div>
          <div className="i fas fa-play"></div>
        </div>
      </div>
      <div className="picked">
        <img src={img} alt="" />
        <div className="inner-picked">
          <div className="left">
            <h4>Song Title</h4>
            <p className="nam">Lolade</p>
            <p className="name">23m likes </p>
          </div>
          <div className="i fas fa-play"></div>
        </div>
      </div> */}
    </div>
  );
};

export default MCollection;
