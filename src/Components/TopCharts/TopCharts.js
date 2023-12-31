import React, {
  useState,
  useRef,
  useEffect,
  useContext,
} from "react";
import "./TopCharts.scss";
import { Link } from "react-router-dom";
import { AuthContext } from "../context";
import { useNavigate } from "react-router-dom";

const TopCharts = () => {

  const {
    setGlobalMusicData,
    setDataType,
    albums,
  } = useContext(AuthContext);


  //drag functionality and state management
  const itemsContainer = useRef();
  const navigate = useNavigate();
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftState, setScrollLeftState] = useState(null);
  const [mouseMoved, setMouseMoved] = useState(0);
  const [isDragging, setIsDragging] = useState(false); // Flag for drag action


  //function thet is triggered when mouse is clicked down
  const handleMouseDown = (e) => {
    e.preventDefault();
    setIsDown(true);
    setIsDragging(false); // Reset dragging flag on mouse down
    setStartX(e.pageX || e.touches[0].pageX);
    setScrollLeftState(itemsContainer.current.scrollLeft);
    setMouseMoved(0);
  };


  //function thet is triggered when cursor is moved
  const handleMouseMove = (e) => {
    if (!isDown) {
      return;
    }
    e.preventDefault();
    const currentMousePosition = e.pageX || e.touches[0].pageX;
    setMouseMoved(currentMousePosition - startX);
    if (!isDragging && Math.abs(currentMousePosition - startX) > 5) {
      // Start dragging if the mouse moves more than a threshold
      setIsDragging(true);
    }
  };


  //function thet is triggered when cursor is moved
  const handleMouseUp = () => {
    setIsDown(false);
    if (!isDragging) {
      // If no dragging occurred, consider it a click
      setIsDragging(false);
    }
  };


  //function that is triggered when link is clicked
  const handleLinkClick = (e, id) => {
    if (isDragging) {
      e.preventDefault();
    } else {
      navigate(`/song/${id}`);
    }
  };


  useEffect(() => {
    if (isDown) {
      itemsContainer.current.scrollLeft = scrollLeftState - mouseMoved;
    }
  }, [scrollLeftState, mouseMoved, isDown]);

  useEffect(() => {
    itemsContainer.current.scrollLeft = scrollLeftState - mouseMoved;
  }, [scrollLeftState, mouseMoved]);

  


  let renderedData;

  if (albums) {
    renderedData = albums.map((album) => {
      const { name, type, release_date, id } = album;
      const artistName = album.artists[0].name;
      const albumImage = album.images[0].url;
      const date = release_date.slice(0, 4);
      return (
        <Link
          key={id}
          to={`/song/${id}`}
          onClick={() => {
            setGlobalMusicData(albums);
            setDataType(type);
          }}
          style={{ color: "white" }}
        >
          <div className="card">
            <div className="info">
              <img src={albumImage} alt="" />
              <div className="text">
                <h5 className="s-title">{name}</h5>
                <p className="a-name">{artistName}</p>
                <p className="duration">{date}</p>
              </div>
            </div>
            <i className="fas fa-heart"></i>
          </div>
        </Link>
      );
    });
  }

  // render the horizontal slider when scren size is less than 970px
  if (window.innerWidth <= 970 && albums) {
    renderedData = albums.map((album) => {
      const { name, type, release_date, id } = album;
      const artistName = album.artists[0].name;
      const albumImage = album.images[0].url;
      const date = release_date.slice(0, 4);
      return (
        <Link
          to={`/song/${id}`}
          key={id}
          onClick={(e) => {
            setGlobalMusicData(albums);
            setDataType(type);
            handleLinkClick(e, id);
          }}
          style={{ color: "white" }}
        >
          <div
            className="image"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onTouchStart={handleMouseDown}
            onTouchMove={handleMouseMove}
            onTouchEnd={handleMouseUp}
          >
            <div className="info">
              <div className="text">
                <img src={albumImage} alt="" />
                <p className="s-title">{name}</p>
                <p className="a-name">{artistName}</p>
              </div>
            </div>
            <i className="fas fa-heart"></i>
          </div>
        </Link>
      );
    });
  }

  return (
    <div className="parent-Cont">
      <div className="top-charts">
        <h3>Top charts</h3>
        <div className="cards">{renderedData}</div>
      </div>

      <div className="top-chart-slider">
        <h3>Top charts</h3>
        <div
          ref={itemsContainer}
          className={isDown ? "item-container actived" : "item-container"}
        >
          {renderedData}
        </div>
      </div>
    </div>
  );
};

export default TopCharts;
