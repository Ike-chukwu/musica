import "./App.css";
import Signin from "./Components/Signin/Signin";
import Signup from "./Components/Signup/Signup";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home";
import Sidebar from "./Components/Sidebar/Sidebar";
import Collection from "./Pages/Collection";
import Logout from "./Pages/Logout";
import Profile from "../src/Pages/Profile"
import Radio from "../src/Pages/Radio"
import SideNav from "./Components/SideNav/SideNav";
import ControlTab from "./Components/ControlTab/ControlTab";
import SongDetails from "./Components/SongDetails/SongDetails";


function App() {
  return (
    <div className="App">
      <Navbar />
      <SideNav/>
      <div className="ex">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/song" element={<SongDetails />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
      <ControlTab/>
    </div>
  );
}

export default App;
