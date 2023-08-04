import React, {useContext} from "react";
import "./Navbar.scss";
import logo from "../../icons/logo.png";
import searchIcon from "../../icons/search.png";
import "./Navbar.scss";
import { AuthContext } from "../context";

const Navbar = () => {

  const {isSideNavActivei, setSideNav} = useContext(AuthContext)


  return (
    <div className="nav">
      <div className="icons-pack">
        <i className="fas fa-bars" onClick={() => setSideNav(!isSideNavActivei)}></i>
        <img src={logo} className="logo" alt="" />
      </div>
      <div className="search-field">
        <img className="search" src={searchIcon} alt="" />
        <input type="text" placeholder="Search artists" />
      </div>
    </div>
  );
};

export default Navbar;

// https://t.co/a8VPTUm7d3
//shazam
//spotify
//deezer
