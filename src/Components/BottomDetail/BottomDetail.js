import React from "react";
import "./BottomDetail.scss";
import img from "../../images/Lead-image.jpg";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context";

const BottomDetail = (props) => {
  const { dataType, currentSong, setCurrentSong,mData, setMdata, isPlaying, setisPlaying, audioElement, nextSong } = useContext(AuthContext);

  const [image, setImg] = useState();
  const [tracks, setTracks] = useState();
  const [duartion, setDuration] = useState();
  const [aName, setAName] = useState();
  const [type, setType] = useState();

  let songRender;
  let musicDetails

  useEffect(() => {
    if (props.data) {
      if (dataType == "album") {
        setTracks(props.data.tracks);
        setImg(props.data.albumImg);
        setAName(props.data.artistName);
        setType(dataType);
      }
      else if (props.data) {
        if (dataType == "track") {
          console.log(props.data);
          console.log('you');
          setTracks(props.data.tracks);
          setImg(props.data.albumImg);
          setAName(props.data.artistName);
          setType(dataType);
        }
      }
    }
  }, [props.data]);

  // useEffect(() => {
  //   if (isPlaying) {
  //     console.log(currentSong);
  //     audioElement.current.play(); // Play the audio when isPlaying becomes true
  //   }
  // }, [isPlaying]);
  
  



  const playSong = (img,trackName,artist,songLink) => {
    musicDetails = {
      name:trackName,
      src:songLink,
      img:img,
      arTistName:artist
    }
    setCurrentSong(musicDetails)
    setisPlaying(true)
  }


  const durationCoverterToMinute = (time) => {
    const conversionToSeconds = Math.floor( time / 1000)
    const minutes = Math.floor(conversionToSeconds / 60)
    const seconds =  conversionToSeconds % 60
    console.log(`${minutes}:${seconds}`);
    if (seconds < 10){
      return `${minutes}:0${seconds}`
    }
    return `${minutes}:${seconds}`
  }









  if (tracks) {
    songRender = tracks.map((track) => {
      return (
        <div className="music-card" onClick={() => playSong(image,track.name,aName, track.preview_url )}>
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
          <p className="duration">{durationCoverterToMinute(track.duration_ms)}</p>
          <div className="options">
            <span className="options-btn">:</span>
            <div className="music-opt">
              <span className="options-btn-2">:</span>
              <span className="time">{durationCoverterToMinute(track.duration_ms)}</span>
            </div>
          </div>
        </div>
      );
    });
  }

  return (
    <div className="b-detail">
      {songRender}
      {/* <div className="music-card">
        <div className="img-like">
          <div className="inner">
            <img src={img} alt="" />
            <i className="fas fa-heart"></i>
            <div className="text">
              <p>Let me love you ~ Krisx</p>
              <p>Single</p>
            </div>
          </div>
          <p className="song-text">Let me love you ~ Krisx</p>
        </div>
        <p className="category">Single</p>
        <p className="duration">2:30</p>
        <div className="options">
          <span className="options-btn">:</span>
          <div className="music-opt">
            <span className="options-btn-2">:</span>
            <span className="time">4:07</span>
          </div>
        </div>
      </div>
      <div className="music-card">
        <div className="img-like">
          <div className="inner">
            <img src={img} alt="" />
            <i className="fas fa-heart"></i>
            <div className="text">
              <p>Let me love you ~ Krisx</p>
              <p>Single</p>
            </div>
          </div>
          <p className="song-text">Let me love you ~ Krisx</p>
        </div>
        <p className="category">Single</p>
        <p className="duration">2:30</p>
        <div className="options">
          <span className="options-btn">:</span>
          <div className="music-opt">
            <span className="options-btn-2">:</span>
            <span className="time">4:07</span>
          </div>
        </div>
      </div>
      <div className="music-card">
        <div className="img-like">
          <div className="inner">
            <img src={img} alt="" />
            <i className="fas fa-heart"></i>
            <div className="text">
              <p>Let me love you ~ Krisx</p>
              <p>Single</p>
            </div>
          </div>
          <p className="song-text">Let me love you ~ Krisx</p>
        </div>
        <p className="category">Single</p>
        <p className="duration">2:30</p>
        <div className="options">
          <span className="options-btn">:</span>
          <div className="music-opt">
            <span className="options-btn-2">:</span>
            <span className="time">4:07</span>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default BottomDetail;
