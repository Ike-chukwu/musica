import React, {
  useState,
  useRef,
  useEffect,
  useContext,
  useCallback,
} from "react";
import "./Slider.css";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context";


const Slider = (props) => {
  //drag functionality and state management
  const [isDown, setIsDown] = useState(false);
  const [isDragging, setIsDragging] = useState(false); // Flag for drag action
  const [startX, setStartX] = useState(0);
  const [scrollLeftState, setScrollLeftState] = useState(null);
  const [mouseMoved, setMouseMoved] = useState(0);
  const itemsContainer = useRef();
  const navigate = useNavigate();

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
  const handleLinkClick = (e, item) => {
    if (isDragging) {
      e.preventDefault();
    } else {
      navigate(`/song/${item.id}`);
    }
  };

  useEffect(() => {
    if (isDown) {
      itemsContainer.current.scrollLeft = scrollLeftState - mouseMoved;
    }
  }, [scrollLeftState, mouseMoved, isDown]);

  //fetching data
  const {
    globalMusicData,
    setGlobalMusicData,
    dataType,
    setDataType,
    mData,
    setMdata,
  } = useContext(AuthContext);

  // state that manages playlist data gotten from spotify api
  const [playListData, setPlayListdata] = useState();

  const fetcher = async () => {
    const url = props.url;
    const options = {
      method: "GET",
      headers: {
        'X-RapidAPI-Key': '59e49d7a62mshd0ad2ae881b7debp1b303ajsnf487f30d0e69',
        'X-RapidAPI-Host': 'spotify81.p.rapidapi.com'
      },
    };
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      const musicData = result.items;
      const trackData = musicData.map((item) => item.track);
      return trackData;
    } catch (error) {
      console.error(error);
    }
  };

  const fetchDataMemoized = useCallback(() => {
    fetcher().then((result) => {
      setPlayListdata(result);
      console.log(result);
    });
  }, []);

  useEffect(() => {
    fetchDataMemoized();
  }, [fetchDataMemoized]);

  let data;
  if (playListData) {
    data = playListData.map((item) => {
      return (
        <Link
          to={`/song/${item.id}`}
          key={item.id}
          onClick={(e) => {
            handleLinkClick(e, item);
            setGlobalMusicData(playListData);
            setDataType(item.type);
          }}
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
            <img src={item.album.images[1].url} alt="" />
            <p
              className="song-name"
              style={{
                color: "white",
                fontSize: "1.4rem",
                marginBlock: "0.3rem",
              }}
            >
              {item.name}
            </p>
            <p
              style={{
                color: "white",
                fontSize: "1.4rem",
                marginBlock: "0.3rem",
              }}
              className="artist-name"
            >
              {item.album.artists[0].name}
            </p>
          </div>
        </Link>
      );
    });
  }

  return (
    <div className="overall-container">
      <h3>{props.category}</h3>
      <div
        ref={itemsContainer}
        className={isDown ? "item-container activated" : "item-container"}
      >
        {data}
      </div>
    </div>
  );
};

export default Slider;
