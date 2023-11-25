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
import { useState, useContext, useEffect } from "react";
import { AuthContext } from "./Components/context";
import UnderConstruction from "./Components/UnderConstructionPage/UnderConstruction";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import Loader from "./Components/Loader/Loader";
import { auth } from "./Firebase";

function App() {
  const status = localStorage.getItem("status") || "";
  const loginState = localStorage.getItem("loggedIn") === "true";

  const [loggedIn, setLogin] = useState(loginState);
  const [state, setState] = useState(status);

  const {
    currentSong,
    musicRef,
    nextSong,
    audioElement,
    isRepeatClicked,
    destination,
    setDestination,
    loading,
    user,
    firstPlaylistloading,
    setFirstPlaylistloading,
    secondPlaylistloading,
    setSecondPlaylistloading,
  } = useContext(AuthContext);

  useEffect(() => {
    // console.log(state, loggedIn, user);
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user && status && loginState) {
        console.log(loggedIn);
        setLogin(true);
        setState("signedIn");
        console.log(state, loggedIn, user);
        localStorage.setItem("loggedIn", "true");
      } else {
        setLogin("false");
        setState("");

        localStorage.removeItem("loggedIn");
      }
    });
    return () => unsubscribe();
  }, []);

  const onLoadedMetadata = () => {
    const seconds = audioElement.current.duration;
    setDuration(seconds);
    musicRef.current.max = seconds;
  };

  const [timeProgress, setTimeProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  const location = useLocation();

  return (
    <div className="App">
      {loggedIn && status == "signedIn" ? (
        loading || firstPlaylistloading || secondPlaylistloading ? (
          <Loader />
        ) : (
          <>
            <Navbar />
            <SideNav setLog={setLogin} loggedIn={loggedIn} />
            <div className="ex">
              <Sidebar setLog={setLogin} loggedIn={loggedIn} />
              <AnimatePresence mode="wait">
                <Routes key={location.pathname} location={location}>
                  <Route path="/" element={<Home />} />
                  <Route path="/song/:id" element={<SongDetails />} />
                  <Route path="/collection" element={<Collection />} />
                  <Route path="/logout" element={<Logout />} />
                  <Route path="/radio" element={<UnderConstruction />} />
                  <Route path="/video" element={<UnderConstruction />} />
                  <Route
                    path="/profile"
                    element={<Profile setLog={setLogin} loggedIn={loggedIn} />}
                  />
                </Routes>
              </AnimatePresence>
              {isRepeatClicked ? (
                <audio
                  onLoadedMetadata={onLoadedMetadata}
                  src={currentSong ? currentSong.src : null}
                  ref={audioElement}
                  onEnded={nextSong}
                  loop
                ></audio>
              ) : (
                <audio
                  onLoadedMetadata={onLoadedMetadata}
                  src={currentSong ? currentSong.src : null}
                  ref={audioElement}
                  onEnded={nextSong}
                ></audio>
              )}
              {currentSong && (
                <ControlTab
                  duration={duration}
                  setTimeProgress={setTimeProgress}
                  audioElement={audioElement}
                />
              )}
            </div>
          </>
        )
      ) : (
        <AnimatePresence mode="wait">
          <Routes key={location.pathname} location={location}>
            <Route path="/" element={<Signin setLog={setLogin} />} />
            <Route path="/signup" element={<Signup />} />
            <Route
              path="/profile"
              element={<Profile setLog={setLogin} loggedIn={loggedIn} />}
            />
          </Routes>
        </AnimatePresence>
      )}
    </div>
  );
}

export default App;
