import React, { useContext, useRef, useEffect } from "react";
import "./SideNav.scss";
import { AuthContext } from "../context";
import { Link, useLocation } from "react-router-dom";

const SideNav = () => {
  const { isSideNavActive, setSideNav } = useContext(AuthContext);

  const sideNavRef = useRef(null);

  const location = useLocation();

  useEffect(() => {
    // Add event listener to the document object
    document.addEventListener("mousedown", handleClickOutside);
    // Remove event listener when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  function handleClickOutside(event) {
    if (sideNavRef.current && !sideNavRef.current.contains(event.target)) {
      setSideNav(false);
    }
  }

  const currentRoute = (path) => {
    return location.pathname == path;
  };

  return (
    <div
      ref={sideNavRef}
      className={isSideNavActive ? "sideNav active" : "sideNav"}
    >
      <ul className="link-pack">
        <Link to="/" onClick={() => setSideNav(false)}>
          <li className="link">
            <i
              className={
                currentRoute("/") ? "fas fa-home selected" : "fas fa-home"
              }
            ></i>
            <span className="name">home</span>
          </li>
        </Link>
        <Link to="/collection" onClick={() => setSideNav(false)}>
          <li className="link">
            <i
              className={
                currentRoute("/collection")
                  ? "fas fa-box selected"
                  : "fas fa-box"
              }
            ></i>
            <span className="name">my collections</span>
          </li>
        </Link>
        <Link to='/radio' onClick={() => setSideNav(false)}>
          <li className="link">
            <i
              className={
                currentRoute("/radio")
                  ? "fas fa-radio selected"
                  : "fas fa-radio"
              }
            ></i>
            <span className="name">radio</span>
          </li>
        </Link>
        <Link to='/video' onClick={() => setSideNav(false)}>
          <li className="link">
            <i
              className={
                currentRoute("/video")
                  ? "fas fa-video selected"
                  : "fas fa-video"
              }
            ></i>
            <span className="name">music videos</span>
          </li>
        </Link>
        <Link to="/profile" onClick={() => setSideNav(false)}>
          <li className="link">
            <i
              className={
                currentRoute("/profile")
                  ? "fas fa-user selected"
                  : "fas fa-user"
              }
            ></i>
            <span className="name">profile</span>
          </li>
        </Link>
        <Link onClick={() => setSideNav(false)}>
          <li className="link">
            <i className="fas fa-sign-out"></i>
            <span className="name">log out</span>
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default SideNav;
