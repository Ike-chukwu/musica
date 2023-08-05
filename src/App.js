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
import { useEffect, useState } from "react";

function App() {
  const status = localStorage.getItem("status") || "";
  const loginState = localStorage.getItem("loggedIn") || false;

  const [loggedIn, setLogin] = useState(loginState);
  const [state, setStaate] = useState(status);

  // useEffect(() => {

  // }, [state])

  return (
    <div className="App">
      {loggedIn && state == 'signedIn' ? (
        <>
          <Navbar />
          <SideNav />
          <div className="ex">
            <Sidebar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/song" element={<SongDetails />} />
              <Route path="/collection" element={<Collection />} />
              <Route path="/logout" element={<Logout />} />
              <Route
                path="/profile"
                element={<Profile setLog={setLogin} loggedIn={loggedIn} />}
              />{" "}
            </Routes>
            <ControlTab />
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
