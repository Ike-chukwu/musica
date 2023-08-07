import React, { createContext, useState, useRef } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../Firebase";
import { useEffect } from "react";
import ukelele from "../music/ukulele.mp3";
import summer from "../music/summer.mp3";
import hey from "../music/hey.mp3";
import img1 from "../images/AlbumCard-1.jpg";
import img2 from "../images/AlbumCard-2.jpg";
import img3 from "../images/AlbumCard-3.jpg";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  //state that stores sidenav status
  const [isSideNavActive, setSideNav] = useState(false);
  const [user, setUser] = useState({});
  const [username, setUsername] = useState("");

  const [musicList, setMusic] = useState([
    { name: "ukelele", src: ukelele, img: img1 },
    { name: "summer", src: summer, img: img2 },
    { name: "hey", src: hey, img: img3 },
  ]);

  const [currentSong, setCurrentSong] = useState(musicList[0]);
  const [isPlaying, setisPlaying] = useState(false);
  const [isRepeatClicked, setIsRepeatClicked] = useState(false);

  // ref of progress bar
  const musicRef = useRef();
  //ref of auio element
  const audioElement = useRef();

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    return signOut(auth);
  };

  //function that plays the next song
  const nextSong = () => {
    let index = musicList.findIndex((music) => music.name == currentSong.name);
    if (index >= musicList.length - 1) {
      index = 0;
      setCurrentSong(musicList[index]);
    } else {
      index++;
      console.log(currentSong);
      setCurrentSong(musicList[index]);
    }
  };

  //function that plays the previous song
  const prevSong = () => {
    let index = musicList.findIndex((music) => music.name == currentSong.name);
    if (index <= 0) {
      index = musicList.length - 1;
      setCurrentSong(musicList[index]);
    } else {
      index--;
      console.log(currentSong);
      setCurrentSong(musicList[index]);
    }
  };

  //function that repeats the previous song that was played
  const repeatSong = () => {
    audioElement.current.currentTime = 0;
  };

  //function that picks any rnadom song
  const shuffleSong = () => {
    const randomNumber = Math.floor(Math.random() * musicList.length);
    setCurrentSong(musicList[randomNumber]);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      setUser(currentUser);
    });
    return () => unSubscribe();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isSideNavActive,
        setSideNav,
        createUser,
        user,
        logout,
        signIn,
        setUsername,
        username,
        musicList,
        setCurrentSong,
        setMusic,
        currentSong,
        isPlaying,
        setisPlaying,
        musicRef,
        nextSong,
        prevSong,
        repeatSong,
        audioElement,
        isRepeatClicked,
        setIsRepeatClicked,
        shuffleSong,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
