import React, { useContext } from "react";
import "./Profile.scss";
import { AuthContext } from "../Components/context";
import { useNavigate } from "react-router-dom";


const Profile = (props) => {
  const { user, logout } = useContext(AuthContext);
  const navigate =  useNavigate()

  const handleLogout = async (e) => {
    try {
      await logout()
      navigate('/')
      props.setLog(false)
      localStorage.setItem('loggedIn', false)
      localStorage.setItem('status', "signedOut")
      console.log(props.loggedIn);
    } catch (e) {
      console.log(e.message);
    }
  }


  return (
    <div className="profile">
      <p>Profile</p>
      <p>User Email: {user && user.email}</p>
      <button onClick = {handleLogout}>Log out</button>
    </div>
  );
};

export default Profile;
