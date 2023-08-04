import React, { useState, useRef, useEffect } from "react";
import "./Slider.css";
import imageTry from "../../images/Rectangle 14.jpg";

const Slider = ({category}) => {
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftState, setScrollLeftState] = useState(null);
  const [mouseMoved, setMouseMoved] = useState(0);

  const itemsContainer = useRef();

  const handleMouseDown = (e) => {
    setIsDown(true);

    if (e.pageX === undefined) {
      setStartX(e.touches[0].pageX - itemsContainer.current.offsetLeft);
    } else {
      setStartX(e.pageX - itemsContainer.current.offsetLeft);
    }

    setScrollLeftState(itemsContainer.current.scrollLeft);
    setMouseMoved(0);
  };

  const handleMouseMove = (e) => {
    if (!isDown) {
      return;
    }

    const currentMousePosition =
      e.pageX === undefined
        ? e.touches[0].pageX - itemsContainer.current.offsetLeft
        : e.pageX - itemsContainer.current.offsetLeft;
    setMouseMoved(currentMousePosition - startX);
  };

  useEffect(() => {
    itemsContainer.current.scrollLeft = scrollLeftState - mouseMoved;
  }, [scrollLeftState, mouseMoved]);

  return (
    <div className="overall-container">
      <h3>{category}</h3>
      <div className="slider-container">
        <div
          ref={itemsContainer}
          className={isDown ? "item-container actived" : "item-container"}
          //   mouseevents
          onMouseDown={(e) => handleMouseDown(e)}
          onMouseUp={() => setIsDown(false)}
          onMouseLeave={() => setIsDown(false)}
          onMouseMove={(e) => handleMouseMove(e)}
          //touch events
          onTouchStart={(e) => handleMouseDown(e)}
          onTouchEnd={(e) => setIsDown(false)}
          onTouchCancel={(e) => setIsDown(false)}
          onTouchMove={(e) => handleMouseMove(e)}
        >
          <div className="image">
            <img src={imageTry} alt="" />
            <p className="song-name">Personal</p>
            <p className="artist-name">Artist Name</p>
          </div>
          <div className="image">
            <img src={imageTry} alt="" />
            <p className="song-name">Personal</p>
            <p className="artist-name">Artist Name</p>
          </div>
          <div className="image">
            <img src={imageTry} alt="" />
            <p className="song-name">Personal</p>
            <p className="artist-name">Artist Name</p>
          </div>
          <div className="image">
            <img src={imageTry} alt="" />
            <p className="song-name">Personal</p>
            <p className="artist-name">Artist Name</p>
          </div>
          <div className="image">
            <img src={imageTry} alt="" />
            <p className="song-name">Personal</p>
            <p className="artist-name">Artist Name</p>
          </div>
          <div className="image">
            <img src={imageTry} alt="" />
            <p className="song-name">Personal</p>
            <p className="artist-name">Artist Name</p>
          </div>
          <div className="image">
            <img src={imageTry} alt="" />
            <p className="song-name">Personal</p>
            <p className="artist-name">Artist Name</p>
          </div>
          <div className="image">
            <img src={imageTry} alt="" />
            <p className="song-name">Personal</p>
            <p className="artist-name">Artist Name</p>
          </div>
          <div className="image">
            <img src={imageTry} alt="" />
            <p className="song-name">Personal</p>
            <p className="artist-name">Artist Name</p>
          </div>
          <div className="image">
            <img src={imageTry} alt="" />
            <p className="song-name">Personal</p>
            <p className="artist-name">Artist Name</p>
          </div>
          <div className="image">
            <img src={imageTry} alt="" />
            <p className="song-name">Personal</p>
            <p className="artist-name">Artist Name</p>
          </div>
          <div className="image">
            <img src={imageTry} alt="" />
            <p className="song-name">Personal</p>
            <p className="artist-name">Artist Name</p>
          </div>
          <div className="image">
            <img src={imageTry} alt="" />
            <p className="song-name">Personal</p>
            <p className="artist-name">Artist Name</p>
          </div>
          <div className="image">
            <img src={imageTry} alt="" />
            <p className="song-name">Personal</p>
            <p className="artist-name">Artist Name</p>
          </div>
          <div className="image">
            <img src={imageTry} alt="" />
            <p className="song-name">Personal</p>
            <p className="artist-name">Artist Name</p>
          </div>
          <div className="image">
            <img src={imageTry} alt="" />
            <p className="song-name">Personal</p>
            <p className="artist-name">Artist Name</p>
          </div>
          <div className="image">
            <img src={imageTry} alt="" />
            <p className="song-name">Personal</p>
            <p className="artist-name">Artist Name</p>
          </div>
          <div className="image">
            <img src={imageTry} alt="" />
            <p className="song-name">Personal</p>
            <p className="artist-name">Artist Name</p>
          </div>
          <div className="image">
            <img src={imageTry} alt="" />
            <p className="song-name">Personal</p>
            <p className="artist-name">Artist Name</p>
          </div>
          <div className="image">
            <img src={imageTry} alt="" />
            <p className="song-name">Personal</p>
            <p className="artist-name">Artist Name</p>
          </div>
          <div className="image">
            <img src={imageTry} alt="" />
            <p className="song-name">Personal</p>
            <p className="artist-name">Artist Name</p>
          </div>
          <div className="image">
            <img src={imageTry} alt="" />
            <p className="song-name">Personal</p>
            <p className="artist-name">Artist Name</p>
          </div>
          <div className="image">
            <img src={imageTry} alt="" />
            <p className="song-name">Personal</p>
            <p className="artist-name">Artist Name</p>
          </div>
          <div className="image">
            <img src={imageTry} alt="" />
            <p className="song-name">Personal</p>
            <p className="artist-name">Artist Name</p>
          </div>
          <div className="image">
            <img src={imageTry} alt="" />
            <p className="song-name">Personal</p>
            <p className="artist-name">Artist Name</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
