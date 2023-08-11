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
    // { name: "ukelele", src: ukelele, img: img1 },
    // { name: "summer", src: summer, img: img2 },
    // { name: "hey", src: hey, img: img3 },
  ]);

  const [currentSong, setCurrentSong] = useState();
  const [isPlaying, setisPlaying] = useState(false);
  const [isRepeatClicked, setIsRepeatClicked] = useState(false);

  //different states for api calls
  //for new releases section
  const [title, setTitle] = useState();
  const [mData, setMdata] = useState();

  const [globalMusicData, setGlobalMusicData] = useState();


  const [activeButton, setActiveButton] = useState("collection");
  const [collection, setCollection] = useState([]);
  const [fromCollection, setFromCollection] = useState(false);
  const [clickedItemFromCollection, setClickedclickedItemFromCollection] =
    useState();

  const [likes, setlikes] = useState([]);
  const [fromlikes, setFromLikes] = useState(false);
  const [clickedItemFromLikes, setClickedclickedItemFromLikes] = useState();

  const [dataType, setDataType] = useState(null);
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
    console.log(mData);
    if (Array.isArray(mData) == false) {
      // console.log(mData);
      audioElement.current.currentTime = 0;
    } else {
      let index = mData.findIndex((music) => music.name == currentSong.name);
      if (index >= mData.length - 1) {
        index = 0;
        setCurrentSong(mData[index]);
      } else {
        index++;
        console.log(currentSong);
        setCurrentSong(mData[index]);
      }
    }
  };

  //function that plays the previous song
  const prevSong = () => {
    if (Array.isArray(mData) == false) {
      audioElement.current.currentTime = 0;
    } else {
      let index = mData.findIndex((music) => music.name == currentSong.name);
      if (index <= 0) {
        index = mData.length - 1;
        setCurrentSong(mData[index]);
      } else {
        index--;
        console.log(currentSong);
        setCurrentSong(mData[index]);
      }
    }
    // console.log(dataType);
  };

  //function that repeats the previous song that was played
  const repeatSong = () => {
    console.log(isRepeatClicked);
    // audioElement.current.currentTime = 0;
    setIsRepeatClicked(!isRepeatClicked);
  };

  //function that picks any rnadom song
  const shuffleSong = () => {
    if (Array.isArray(mData) == false) {
      audioElement.current.currentTime = 0;
    } else {
      const randomNumber = Math.floor(Math.random() * mData.length);
      setCurrentSong(mData[randomNumber]);
    }
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
        mData,
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
        title,
        mData,
        globalMusicData,
        setGlobalMusicData,
        dataType,
        setDataType,
        setMdata,
        collection,
        setCollection,
        fromCollection,
        setFromCollection,
        clickedItemFromCollection,
        setClickedclickedItemFromCollection,
        likes,
        activeButton, setActiveButton,
        setlikes,
        fromlikes,
        setFromLikes,
        clickedItemFromLikes,
        setClickedclickedItemFromLikes,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
