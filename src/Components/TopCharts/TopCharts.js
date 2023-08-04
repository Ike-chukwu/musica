import React, { useState, useRef, useEffect } from "react";
import "./TopCharts.scss";
import img from "../../images/AlbumCard-3.jpg";
import { Link } from "react-router-dom";

const TopCharts = () => {
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
    <div className="parent-Cont">
      <div className="top-charts">
        <h3>Top charts</h3>
        <div className="cards">
          <div className="card">
            <div className="info">
              <img src={img} alt="" />
              <div className="text">
                <h5 className="s-title">Golden age of 30s</h5>
                <p className="a-name">Sean swadder</p>
                <p className="duration">2:34:45</p>
              </div>
            </div>
            <i className="fas fa-heart"></i>
          </div>
          <Link to='/song' style={{textDecoration:'none', color:'white'}}>
            <div className="card">
              <div className="info">
                <img src={img} alt="" />
                <div className="text">
                  <h5 className="s-title">Golden age of 30s</h5>
                  <p className="a-name">Sean swadder</p>
                  <p className="duration">2:34:45</p>
                </div>
              </div>
              <i className="fas fa-heart"></i>
            </div>
          </Link>
          <div className="card">
            <div className="info">
              <img src={img} alt="" />
              <div className="text">
                <h5 className="s-title">Golden age of 30s</h5>
                <p className="a-name">Sean swadder</p>
                <p className="duration">2:34:45</p>
              </div>
            </div>
            <i className="fas fa-heart"></i>
          </div>
        </div>
      </div>

      <div className="top-chart-slider">
        <h3>Top charts</h3>
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
            <div className="info">
              <div className="text">
                <img src={img} alt="" />
                <p className="s-title">Golden age of 30s</p>
                <p className="a-name">Sean swadder</p>
              </div>
              <p className="duration">2:34:45</p>
            </div>
            <i className="fas fa-heart"></i>
          </div>
          <div className="image">
            <div className="info">
              <div className="text">
                <img src={img} alt="" />
                <p className="s-title">Golden age of 30s</p>
                <p className="a-name">Sean swadder</p>
              </div>
              <p className="duration">2:34:45</p>
            </div>
            <i className="fas fa-heart"></i>
          </div>
          <div className="image">
            <div className="info">
              <div className="text">
                <img src={img} alt="" />
                <p className="s-title">Golden age of 30s</p>
                <p className="a-name">Sean swadder</p>
              </div>
              <p className="duration">2:34:45</p>
            </div>
            <i className="fas fa-heart"></i>
          </div>
          <div className="image">
            <div className="info">
              <div className="text">
                <img src={img} alt="" />
                <p className="s-title">Golden age of 30s</p>
                <p className="a-name">Sean swadder</p>
              </div>
              <p className="duration">2:34:45</p>
            </div>
            <i className="fas fa-heart"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopCharts;
