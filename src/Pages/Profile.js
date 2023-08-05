import React, { useContext } from "react";
import "./Profile.scss";
import { AuthContext } from "../Components/context";
import { useNavigate } from "react-router-dom";

const Profile = (props) => {
  const { user, logout, username } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async (e) => {
    try {
      await logout();
      navigate("/");
      props.setLog(false);
      localStorage.setItem("loggedIn", false);
      localStorage.setItem("status", "signedOut");
      console.log(props.loggedIn);
    } catch (e) {
      console.log(e.message);
    }
  };
  console.log(username);

  return (
    <div className="profile">
      <p className="title">My Profile</p>
      <div className="profile-options">
        <div className="link-of-details">
          <p>Username</p>
          <p>{username ? username : "Empty"}</p>
        </div>
        <div className="link-of-details">
          <p>User Email</p>
          <p> {user && user.email}</p>
        </div>
        <div className="link-of-details">
          <p>Subscription</p>
          <p>FREE</p>
        </div>
        <div className="link-of-details">
          <p>Premium</p>
          <p>Unavailable</p>
        </div>
      </div>
      <button onClick={handleLogout}>Log out</button>
    </div>
  );
};

export default Profile;
