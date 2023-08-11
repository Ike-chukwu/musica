import React, { useContext, useEffect, useState } from "react";
import "./TopDetail.scss";
import img from "../../images/Lead-image.jpg";
import { AuthContext } from "../context";
import { useNavigate } from "react-router-dom";

const TopDetail = (props) => {
  const {
    globalMusicData,
    dataType,
    collection,
    setCollection,
    clickedItemFromCollection,
    setClickedclickedItemFromCollection,
    likes,
    setlikes,
    fromlikes,
    setFromLikes,
    clickedItemFromLikes,
    setClickedclickedItemFromLikes,
  } = useContext(AuthContext);
  const [itemInFocus, setItemInFocus] = useState(null);
  const [noOfTracks, setNoOfTracks] = useState(0);
  const [artistName, setArtistName] = useState("");
  const [cover, setCover] = useState("");
  const [tracks, setTracks] = useState([]);
  const [isInCollection, setIsInCollection] = useState();
  const [isInLikes, setIsInLikes] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    if (globalMusicData && dataType === "album") {
      if (Array.isArray(globalMusicData) == false) {
        const foundItem = globalMusicData;
        if (foundItem) {
          setItemInFocus(foundItem);
          setNoOfTracks(foundItem.total_tracks);
          setArtistName(foundItem.artists[0].name);
          setCover(foundItem.images[0].url);
          setTracks(foundItem.tracks.items);
        }
      } else {
        const foundItem = globalMusicData.find((item) => item.id == props.id);
        if (foundItem) {
          setItemInFocus(foundItem);
          setNoOfTracks(foundItem.total_tracks);
          setArtistName(foundItem.artists[0].name);
          setCover(foundItem.images[0].url);
          setTracks(foundItem.tracks.items);
        }
      }
    } else if (globalMusicData && dataType === "track") {
      if (Array.isArray(globalMusicData) == false) {
        const foundItem = globalMusicData;
        if (foundItem) {
          setItemInFocus(foundItem);
          setNoOfTracks(1);
          setArtistName(foundItem.album.artists[0].name);
          setCover(foundItem.album.images[1].url);
          // setTracks(foundItem.tracks.items);
        }
      } else {
        const foundItem = globalMusicData.find((item) => item.id == props.id);
        if (foundItem) {
          setItemInFocus(foundItem);
          setNoOfTracks(1);
          setArtistName(foundItem.album.artists[0].name);
          setCover(foundItem.album.images[1].url);
          // setTracks(foundItem.tracks.items);
        }
      }
    }
    setIsInCollection(
      collection.find((item) => item.identification == props.id)
    );
    setIsInLikes(
      likes.find((item) => item.identification == props.id)
    );
    console.log(props.id);
    console.log(collection);
  }, [globalMusicData, dataType, props.id]);

  //add to collection
  const addToCollection = (
    id,
    artistName,
    img,
    songName,
    dataType,
    itemInFocus
  ) => {
    const selectedItemDetails = {
      identification: id,
      artist: artistName,
      image: img,
      nameOfSong: songName,
      dataType,
      itemInFocus,
    };
    setCollection([...collection, selectedItemDetails]);
    setIsInCollection(true);
  };

  //add to collection
  const removeFromCollection = () => {
    const filteredCollection = collection.filter(
      (item) => item.identification !== props.id
    );
    setIsInCollection(false);
    setCollection(filteredCollection);
  };

  //add to likes
  const addToLikes = (id, artistName, img, songName, dataType, itemInFocus) => {
    const likedItemDetails = {
      identification: id,
      artist: artistName,
      image: img,
      nameOfSong: songName,
      dataType,
      itemInFocus,
    };
    setlikes([...likes, likedItemDetails]);
    setIsInLikes(true);
  };

  //remove from likes
  const removeFromLikes = () => {
    const filteredLikes = likes.filter(
      (item) => item.identification !== props.id
    );
    setIsInLikes(false);
    setlikes(filteredLikes);
  };

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
          <p>{artistName}</p>
          <p>{`${noOfTracks} songs`}</p>
        </div>
        <div className="btn-pack">
          <div className="btn" onClick={() => props.playSong()}>
            <i className="fas fa-play"></i>
            <span>Play all</span>
          </div>
          {isInCollection ? (
            <div className="btn" onClick={() => removeFromCollection()}>
              <i className="fas fa-box"></i>
              <span>Remove from collection</span>
            </div>
          ) : (
            <div
              className="btn"
              onClick={() =>
                addToCollection(
                  props.id,
                  artistName,
                  cover,
                  itemInFocus.name,
                  dataType,
                  itemInFocus
                )
              }
            >
              <i className="fas fa-box"></i>
              <span>Add to collection</span>
            </div>
          )}
          {isInLikes ? (
            <div className="btn" onClick={() => removeFromLikes()}>
              <i className="fas fa-heart"></i>
              <span>Like</span>
            </div>
          ) : (
            <div className="btn"  onClick={() =>
                addToLikes(
                  props.id,
                  artistName,
                  cover,
                  itemInFocus.name,
                  dataType,
                  itemInFocus
                )
              }>
              <i className="fas fa-heart" style={{color:'white'}}></i>
              <span>Like</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TopDetail;
