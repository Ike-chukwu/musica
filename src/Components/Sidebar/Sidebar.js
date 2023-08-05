import React from "react";
import "./Sidebar.scss";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sideBar">
      <div className="top">
        <Link to="/">
          <i className="fas fa-home"></i>
        </Link>
        <Link to="/collection">
          <i className="fas fa-box"></i>
        </Link>
        <i className="fas fa-radio"></i>
        <i className="fas fa-video"></i>
      </div>
      <div className="bottom">
        <Link to='/profile'>
          <i className="fas fa-user"></i>
        </Link>
        <i className="fas fa-sign-in"></i>
      </div>
    </div>
  );
};

export default Sidebar;
