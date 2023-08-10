import React, { useContext, useEffect, useState } from "react";
import "./SongDetails.scss";
import TopDetail from "../TopDetail/TopDetail";
import BottomDetail from "../BottomDetail/BottomDetail";
import { useParams } from "react-router-dom";
import { AuthContext } from "../context";

const SongDetails = () => {
  const {
    globalMusicData,
    setGlobalMusicData,
    dataType,
    setDataType,
    mData,
    setMdata,
  } = useContext(AuthContext);

  const { id } = useParams();
  let itemInFocus;
  const [dataToBePassed, setDataToBePassed] = useState();

  useEffect(() => {
    if (globalMusicData) {
      if (dataType == "album") {
        itemInFocus = globalMusicData.find((item) => item.id == id);
        const { total_tracks, name } = itemInFocus;
        const artistName = itemInFocus.artists[0].name;
        const albumImg = itemInFocus.images[0].url;
        const tracks = itemInFocus.tracks.items;
        const objOfTracks = tracks.map((track) => {
          return {
            name: track.name,
            src: track.preview_url,
            img: albumImg,
            arTistName: artistName,
          };
        });
        setMdata(objOfTracks);
        console.log(mData);
        // const musicDetails = {
        //   name:trackName,
        //   src:songLink,
        //   img:img,
        //   arTistName:artist
        // }
        setDataToBePassed({ tracks, albumImg, artistName, name, total_tracks });
      } else if (dataType == "track") {
        itemInFocus = globalMusicData.find((item) => item.id == id);
        const { preview_url, name,duration_ms } = itemInFocus;
        const artistName = itemInFocus.album.artists[0].name;
        const albumImg = itemInFocus.album.images[1].url;
        // const tracks = itemInFocus.tracks.items;
        const objOfTracks = {
          name,
          src: preview_url,
          img: albumImg,
          arTistName: artistName,
        };
        setMdata(objOfTracks);
        setDataToBePassed({albumImg,artistName,name, total_tracks:1, tracks:[{duration_ms, name,preview_url}]})
      }
    }
  }, [globalMusicData]);
  

  return (
    <div
      className="songDetails"
      style={
        {
          // backgroundColor: 'rgba(255, 255, 255, 0.5)',
          // backgroundImage: "url(" + img + ")",
          // backgroundRepeat: "no-repeat",
          // backgroundSize: "cover",
        }
      }
    >
      <TopDetail id={id} data={dataToBePassed} />
      <BottomDetail id={id} data={dataToBePassed} dataType={dataType} />
    </div>
  );
};

export default SongDetails;
