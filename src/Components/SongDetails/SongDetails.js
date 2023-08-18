import React, { useContext, useEffect, useState, useRef } from "react";
import "./SongDetails.css";
import TopDetail from "../TopDetail/TopDetail";
import BottomDetail from "../BottomDetail/BottomDetail";
import { useParams } from "react-router-dom";
import { AuthContext } from "../context";
import OpacityAnimation from "../OpacityAnimation/OpacityAnimation";

const SongDetails = () => {
  const {
    globalMusicData,
    dataType,
    setMdata,
    fromCollection,
    setFromCollection,
    fromlikes,
    setFromLikes,
  } = useContext(AuthContext);
  let objOfTracks;

  const { id } = useParams();
  let itemInFocus;
  const [dataToBePassed, setDataToBePassed] = useState();
  const pictureContainer = useRef()

  useEffect(() => {
    if (globalMusicData) {
      if (fromCollection) {
        if (dataType == "album") {
          if (Array.isArray(globalMusicData) == false) {
            itemInFocus = globalMusicData;
            const { total_tracks, name } = itemInFocus;
            const artistName = itemInFocus.artists[0].name;
            const albumImg = itemInFocus.images[0].url;
            const tracks = itemInFocus.tracks.items;
            objOfTracks = tracks.map((track) => {
              return {
                name: track.name,
                src: track.preview_url,
                img: albumImg,
                arTistName: artistName,
              };
            });
            setMdata(objOfTracks);
            setDataToBePassed({
              tracks,
              albumImg,
              artistName,
              name,
              total_tracks,
            });
            pictureContainer.current.style.setProperty("--bg-image", `url(${albumImg})`)
          }
        } else if (dataType == "track") {
          if (Array.isArray(globalMusicData) == false) {
            itemInFocus = globalMusicData;
            const { preview_url, name, duration_ms } = itemInFocus;
            const artistName = itemInFocus.album.artists[0].name;
            const albumImg = itemInFocus.album.images[1].url;
            objOfTracks = {
              name,
              src: preview_url,
              img: albumImg,
              arTistName: artistName,
            };
            setMdata(objOfTracks);
            setDataToBePassed({
              albumImg,
              artistName,
              name,
              total_tracks: 1,
              tracks: [{ duration_ms, name, preview_url }],
            });
            pictureContainer.current.style.setProperty("--bg-image", `url(${albumImg})`)
          }
        }
        setFromCollection(false);
      } else if (fromlikes) {
        if (dataType == "album") {
          if (Array.isArray(globalMusicData) == false) {
            itemInFocus = globalMusicData;
            const { total_tracks, name } = itemInFocus;
            const artistName = itemInFocus.artists[0].name;
            const albumImg = itemInFocus.images[0].url;
            const tracks = itemInFocus.tracks.items;
            objOfTracks = tracks.map((track) => {
              return {
                name: track.name,
                src: track.preview_url,
                img: albumImg,
                arTistName: artistName,
              };
            });
            setMdata(objOfTracks);
            setDataToBePassed({
              tracks,
              albumImg,
              artistName,
              name,
              total_tracks,
            });
            pictureContainer.current.style.setProperty("--bg-image", `url(${albumImg})`)
          }
        } else if (dataType == "track") {
          if (Array.isArray(globalMusicData) == false) {
            itemInFocus = globalMusicData;
            const { preview_url, name, duration_ms } = itemInFocus;
            const artistName = itemInFocus.album.artists[0].name;
            const albumImg = itemInFocus.album.images[1].url;
            objOfTracks = {
              name,
              src: preview_url,
              img: albumImg,
              arTistName: artistName,
            };
            setMdata(objOfTracks);
            setDataToBePassed({
              albumImg,
              artistName,
              name,
              total_tracks: 1,
              tracks: [{ duration_ms, name, preview_url }],
            });
            pictureContainer.current.style.setProperty("--bg-image", `url(${albumImg})`)
          }
        }
        setFromLikes(false);
      } else {
        if (dataType == "album") {
          itemInFocus = globalMusicData.find((item) => item.id == id);
          const { total_tracks, name } = itemInFocus;
          const artistName = itemInFocus.artists[0].name;
          const albumImg = itemInFocus.images[0].url;
          const tracks = itemInFocus.tracks.items;
          objOfTracks = tracks.map((track) => {
            return {
              name: track.name,
              src: track.preview_url,
              img: albumImg,
              arTistName: artistName,
            };
          });
          setMdata(objOfTracks);
          setDataToBePassed({
            tracks,
            albumImg,
            artistName,
            name,
            total_tracks,
          });
          pictureContainer.current.style.setProperty("--bg-image", `url(${albumImg})`)
        } else if (dataType == "track") {
          itemInFocus = globalMusicData.find((item) => item.id == id);
          const { preview_url, name, duration_ms } = itemInFocus;
          const artistName = itemInFocus.album.artists[0].name;
          const albumImg = itemInFocus.album.images[1].url;
          objOfTracks = {
            name,
            src: preview_url,
            img: albumImg,
            arTistName: artistName,
          };
          setMdata(objOfTracks);
          setDataToBePassed({
            albumImg,
            artistName,
            name,
            total_tracks: 1,
            tracks: [{ duration_ms, name, preview_url }],
          });
          pictureContainer.current.style.setProperty("--bg-image", `url(${albumImg})`)
        }
      }
    }
  }, [globalMusicData]);



  return (
    <OpacityAnimation>
      <div className="songDetails" ref={pictureContainer}>
        <TopDetail id={id}  />
        <BottomDetail id={id} data={dataToBePassed} dataType={dataType} />
      </div>
    </OpacityAnimation>
  );
};

export default SongDetails;
