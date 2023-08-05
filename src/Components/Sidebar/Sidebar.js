import React from "react";
import "./Sidebar.scss";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();

  const currentRoute = (path) => {
    return location.pathname == path;
  };

  return (
    <div className="sideBar">
      <div className="top">
        <Link to="/">
          <i
            className={
              currentRoute("/") ? "fas fa-home selected" : "fas fa-home"
            }
          ></i>
        </Link>
        <Link to="/collection">
          <i
            className={
              currentRoute("/collection") ? "fas fa-box selected" : "fas fa-box"
            }
          ></i>
        </Link>
        <Link to='/radio'>
          <i
            className={
              currentRoute("/radio") ? "fas fa-radio selected" : "fas fa-radio"
            }
          ></i>
        </Link>
        <Link to='/video'>
          <i
            className={
              currentRoute("/video") ? "fas fa-video selected" : "fas fa-video"
            }
          ></i>
        </Link>
      </div>
      <div className="bottom">
        <Link to="/profile">
          <i
            className={
              currentRoute("/profile") ? "fas fa-user selected" : "fas fa-user"
            }
          ></i>
        </Link>
        <i className="fas fa-sign-in"></i>
      </div>
    </div>
  );
};

export default Sidebar;
