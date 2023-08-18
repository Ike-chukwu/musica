import React, { createContext, useState, useRef } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../Firebase";
import { useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  //state that stores signup  info
  const [user, setUser] = useState({});
  const [username, setUsername] = useState("");

  //function that creates a new user
  const createUser = async (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //function that signs in a user
  const signIn = async (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

   //function that logs a user out
  const logout = async () => {
    return signOut(auth);
  };




  //loading state of all api calls
  const [loading, setLoading] = useState(false);
  const [firstPlaylistloading, setFirstPlaylistloading] = useState(false);
  const [secondPlaylistloading, setSecondPlaylistloading] = useState(false);

  //state that stores sidenav status
  const [isSideNavActive, setSideNav] = useState(false);




  //state that stores music data need for play functionality
  const [musicList, setMusic] = useState([]);
  const [currentSong, setCurrentSong] = useState();
  const [isPlaying, setisPlaying] = useState(false);
  const [isRepeatClicked, setIsRepeatClicked] = useState(false);
  const [title, setTitle] = useState();
  const [mData, setMdata] = useState();
  const [globalMusicData, setGlobalMusicData] = useState();
  
  // state that holds the current nav location in collection
  const [activeButton, setActiveButton] = useState("collection");
  const [collection, setCollection] = useState([]);
  const [fromCollection, setFromCollection] = useState(false);
  const [clickedItemFromCollection, setClickedclickedItemFromCollection] =
    useState();
  const [likes, setlikes] = useState([]);
  const [fromlikes, setFromLikes] = useState(false);
  const [clickedItemFromLikes, setClickedclickedItemFromLikes] = useState();
  //stores the type of of data whether album or music
  const [dataType, setDataType] = useState(null);
  // ref of progress bar
  const musicRef = useRef();
  //ref of auio element
  const audioElement = useRef();


  //function that plays the next song
  const nextSong = () => {
    console.log(mData);
    if (Array.isArray(mData) == false) {
      audioElement.current.currentTime = 0;
      setisPlaying(false);
    } else {
      let index = mData.findIndex((music) => music.name == currentSong.name);
      if (index >= mData.length - 1) {
        index = 0;
        setCurrentSong(mData[index]);
      } else {
        index++;
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
        setCurrentSong(mData[index]);
      }
    }
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
      setUser(currentUser);
    });
    return () => unSubscribe();
  }, []);

  //fetching data for albums from spotify api
  const [albums, setAlbums] = useState();
  let listOfAlbums;
  const fetchData = async () => {
    const url =
      "https://spotify81.p.rapidapi.com/albums?ids=2O9VJaLSnwjZ2HPpMaVoPU%252C73rKiFhHZatrwJL0B1F6hY%252C7bFrLfofeujIbvs4WcHn3p";
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key":  process.env.REACT_APP_SPOTIFY_API_KEY,
        "X-RapidAPI-Host": "spotify81.p.rapidapi.com",
      },
    };
    setLoading(true);
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      listOfAlbums = result.albums;
      setAlbums(listOfAlbums);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  //fetch data for trending
  const [firstPlayList, setFirstPlayList] = useState();

  const fetchFirstPlaylist = async () => {
    const url =
      "https://spotify81.p.rapidapi.com/playlist_tracks?id=37i9dQZF1DWX0o6sD1a6P5&offset=0&limit=100";
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_SPOTIFY_API_KEY,
        "X-RapidAPI-Host": "spotify81.p.rapidapi.com",
      },
    };
   setFirstPlaylistloading(true)
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      const musicData = result.items;
      const trackData = musicData.map((item) => item.track);
      setFirstPlayList(trackData);
      setFirstPlaylistloading(false)
    } catch (error) {
      console.error(error);
    }
  };

  //fetch data for naija bars playlists
  const [secondPlayList, setSecondPlayList] = useState();

  const fetchSecondPlaylist = async () => {
    const url =
      "https://spotify81.p.rapidapi.com/playlist_tracks?id=37i9dQZF1DWUHcUDX0za7N&offset=0&limit=100";
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key":  process.env.REACT_APP_SPOTIFY_API_KEY,
        "X-RapidAPI-Host": "spotify81.p.rapidapi.com",
      },
    };
    setSecondPlaylistloading(true)
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      const musicData = result.items;
      const trackData = musicData.map((item) => item.track);
      setSecondPlayList(trackData);
      setSecondPlaylistloading(false)
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (!albums) {
      fetchData();
    }
    if (!firstPlayList) {
      fetchFirstPlaylist();
    }
    if (!secondPlayList) {
      fetchSecondPlaylist();
    }
  }, [albums, firstPlayList, secondPlayList]);

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
        activeButton,
        setActiveButton,
        setlikes,
        fromlikes,
        setFromLikes,
        clickedItemFromLikes,
        setClickedclickedItemFromLikes,
        loading,
        setLoading,
        albums,
        setAlbums,
        secondPlayList,
        setSecondPlayList,
        firstPlayList,
        setFirstPlayList,
        firstPlaylistloading,
        setFirstPlaylistloading,
        secondPlaylistloading,
        setSecondPlaylistloading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
