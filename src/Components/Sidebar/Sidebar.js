import React, { useContext } from "react";
import "./Sidebar.scss";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../context";

const Sidebar = (props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const {  logout, audioElement } =
    useContext(AuthContext);

  const handleLogout = async (e) => {
    try {
      audioElement.current = null;
      await logout();
      navigate("/");
      props.setLog(false);
      localStorage.setItem("loggedIn", false);
      localStorage.setItem("status", "signedOut");
      console.log(props.loggedIn);
    } catch (e) {}
  };

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
        <Link to="/radio">
          <i
            className={
              currentRoute("/radio") ? "fas fa-radio selected" : "fas fa-radio"
            }
          ></i>
        </Link>
        <Link to="/video">
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
        <i className="fas fa-sign-in" onClick={handleLogout}></i>
      </div>
    </div>
  );
};

export default Sidebar;
