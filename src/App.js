import "./App.css";
import Signin from "./Components/Signin/Signin";
import Signup from "./Components/Signup/Signup";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home";
import Sidebar from "./Components/Sidebar/Sidebar";
import Collection from "./Pages/Collection";
import Logout from "./Pages/Logout";
import Profile from "../src/Pages/Profile";
import Radio from "../src/Pages/Radio";
import SideNav from "./Components/SideNav/SideNav";
import ControlTab from "./Components/ControlTab/ControlTab";
import SongDetails from "./Components/SongDetails/SongDetails";
import { useEffect,useCallback, useState, useContext, useRef } from "react";
import { AuthContext } from "./Components/context";

function App() {

  const status = localStorage.getItem("status") || "";
  const loginState = localStorage.getItem("loggedIn") || false;

  const [loggedIn, setLogin] = useState(loginState);
  const [state, setStaate] = useState(status);

  const {
    musicList,
    setCurrentSong,
    setMusic,
    currentSong,
    isPlaying,
    setisPlaying,
    musicRef,
    nextSong,
    audioElement,
    isRepeatClicked
  } = useContext(AuthContext);


  

  

  const onLoadedMetadata = () => {
    const seconds = audioElement.current.duration;
    setDuration(seconds);
    musicRef.current.max = seconds;

  };




 

  const [timeProgress, setTimeProgress] = useState(0);
  const [duration, setDuration] = useState(0);



  return (
    <div className="App">
      {loggedIn && state == "signedIn" ? (
        <>
          <Navbar />
          <SideNav />
          <div className="ex">
            <Sidebar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/song/:id" element={<SongDetails />} />
              <Route path="/collection" element={<Collection />} />
              <Route path="/logout" element={<Logout />} />
              <Route
                path="/profile"
                element={<Profile setLog={setLogin} loggedIn={loggedIn} />}
              />{" "}
            </Routes>
            {
              isRepeatClicked ?
            <audio  onLoadedMetadata={onLoadedMetadata} src={currentSong?currentSong.src :null} ref={audioElement} onEnded={nextSong} loop></audio> :
            <audio  onLoadedMetadata={onLoadedMetadata} src={currentSong?currentSong.src :null} ref={audioElement} onEnded={nextSong}></audio>
            }
            {
              currentSong &&
            <ControlTab duration={duration} setTimeProgress={setTimeProgress} audioElement={audioElement}/>
            }
          </div>
        </>
      ) : (
        <Routes>
          <Route path="/" element={<Signin setLog={setLogin} />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/profile"
            element={<Profile setLog={setLogin} loggedIn={loggedIn} />}
          />
        </Routes>
      )}
    </div>
  );
}

export default App;
