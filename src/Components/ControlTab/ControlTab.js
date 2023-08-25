import React, {
  useContext,
  useState,
  useRef,
  useCallback,
  useEffect,
} from "react";
import "./ControlTab.scss";
import { AuthContext } from "../context";

const ControlTab = (props) => {
  const {
    nextSong,
    currentSong,
    isPlaying,
    setisPlaying,
    musicRef,
    prevSong,
    audioElement,
    repeatSong,
    isRepeatedClicked,
    shuffleSong,
  } = useContext(AuthContext);

  //state that controls volume
  const [volume, setVolume] = useState(60);

  const [mute, setMute] = useState(false);

  //monitiors the song progress
  const playAnimationRef = useRef();
  const repeat = useCallback(() => {
    if (currentSong && audioElement && audioElement.current) {
      const currentTime = audioElement.current.currentTime;
      props.setTimeProgress(currentTime);
      musicRef.current.value = currentTime;
      musicRef.current.style.setProperty(
        "$range-progress",
        `${(musicRef.current.value / props.duration) * 100}%`
      );

      playAnimationRef.current = requestAnimationFrame(repeat);
    }
  }, [audioElement, props.duration, musicRef]);

  //monitors the play/pause state of the music player
  useEffect(() => {
    if (isPlaying && currentSong) {
      audioElement.current.play();
    } else if (isPlaying == false) {
      audioElement.current.pause();
    }
    playAnimationRef.current = requestAnimationFrame(repeat);
  }, [isPlaying, repeat, currentSong]);

  //function that toggles between play/pause
  const handleClick = () => {
    setisPlaying(!isPlaying);
  };

  //function that assigns the value of the input to the current time
  const handleProgressChange = () => {
    audioElement.current.currentTime = musicRef.current.value;
  };

  //adjusts the volume and mute state when the volume is changed
  useEffect(() => {
    if (audioElement && currentSong) {
      audioElement.current.volume = volume / 100;
      audioElement.current.muted = mute;
    }
  }, [volume, audioElement, mute, currentSong]);

  return (
    <div className="controls">
      <div className="music-details">
        <img src={currentSong.img} alt="" />
        <div className="info">
          <p className="song-name">{currentSong.name}</p>
          <p className="artist">{currentSong.arTistName}</p>
        </div>
      </div>
      <div className="play-controls">
        <div className="top">
          <i onClick={shuffleSong} class="fas fa-shuffle"></i>
          <i className="fa fa-caret-left" onClick={prevSong}></i>
          <i
            onClick={handleClick}
            className={isPlaying ? "fas fa-pause" : "fas fa-play"}
          ></i>
          <i class="fa fa-caret-right" onClick={nextSong}></i>
        </div>
        <input
          defaultValue="0"
          onChange={handleProgressChange}
          ref={musicRef}
          type="range"
        />
      </div>
      <div className="volume-controls">
        <i
          onClick={() => setMute(!mute)}
          class={
            mute || volume <= 0 ? "fas fa-volume-mute" : "fas fa-volume-up"
          }
        ></i>
        <input
          type="range"
          min={0}
          max={100}
          onChange={(e) => setVolume(e.target.value)}
        />
      </div>
    </div>
  );
};

export default ControlTab;
