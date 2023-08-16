import React from "react";
import "./BottomDetail.scss";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context";

const BottomDetail = (props) => {
  const { dataType, setCurrentSong, setisPlaying, isPlaying, audioElement } =
    useContext(AuthContext);

  const [image, setImg] = useState();
  const [tracks, setTracks] = useState();
  const [aName, setAName] = useState();
  const [type, setType] = useState();

  let songRender;
  let musicDetails;

  useEffect(() => {
    if (props.data) {
      setTracks(props.data.tracks);
      setImg(props.data.albumImg);
      setAName(props.data.artistName);
      setType(dataType);
    }
  }, [props.data]);

  //function that plays any song that is clicked
  const playSong = (img, trackName, artist, songLink) => {
    musicDetails = {
      name: trackName,
      src: songLink,
      img: img,
      arTistName: artist,
    };
    setCurrentSong(musicDetails);
    if (isPlaying) {
      audioElement.current.currentTime = 0;
    }
    setisPlaying(true);
  };

  //function that converts song duration in milisecond to minutes & seconds
  const durationCoverterToMinute = (time) => {
    const conversionToSeconds = Math.floor(time / 1000);
    const minutes = Math.floor(conversionToSeconds / 60);
    const seconds = conversionToSeconds % 60;
    if (seconds < 10) {
      return `${minutes}:0${seconds}`;
    }
    return `${minutes}:${seconds}`;
  };

  if (tracks) {
    songRender = tracks.map((track, index) => {
      return (
        <div
          key={index}
          className="music-card"
          onClick={() => playSong(image, track.name, aName, track.preview_url)}
        >
          <div className="img-like">
            <div className="inner">
              <img src={image} alt="" />
              <i className="fas fa-heart"></i>
              <div className="text">
                <p>
                  {track.name}~ {aName}
                </p>
                <p>Single</p>
              </div>
            </div>
            <p className="song-text">
              {track.name}~ {aName}
            </p>
          </div>
          <p className="category">Single</p>
          <p className="duration">
            {durationCoverterToMinute(track.duration_ms)}
          </p>
          <div className="options">
            <span className="options-btn">:</span>
            <div className="music-opt">
              <span className="options-btn-2">:</span>
              <span className="time">
                {durationCoverterToMinute(track.duration_ms)}
              </span>
            </div>
          </div>
        </div>
      );
    });
  }

  return <div className="b-detail">{songRender}</div>;
};

export default BottomDetail;
