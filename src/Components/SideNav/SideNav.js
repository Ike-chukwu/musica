import React, { useContext, useRef, useEffect } from "react";
import "./SideNav.scss";
import { AuthContext } from "../context";

const SideNav = () => {
  const { isSideNavActive, setSideNav } = useContext(AuthContext);

  const sideNavRef = useRef(null);

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

  return (
    <div
      ref={sideNavRef}
      className={isSideNavActive ? "sideNav active" : "sideNav"}
    >
      <ul className="link-pack">
        <li className="link">
          <i className="fas fa-home"></i>
          <span className="name">home</span>
        </li>
        <li className="link">
          <i className="fas fa-box"></i>
          <span className="name">my collections</span>
        </li>
        <li className="link">
          <i className="fas fa-radio"></i>
          <span className="name">radio</span>
        </li>
        <li className="link">
          <i className="fas fa-video"></i>
          <span className="name">music videos</span>
        </li>
        <li className="link">
          <i className="fas fa-user"></i>
          <span className="name">profile</span>
        </li>
        <li className="link">
          <i className="fas fa-sign-out"></i>
          <span className="name">log out</span>
        </li>
      </ul>
    </div>
  );
};

export default SideNav;
