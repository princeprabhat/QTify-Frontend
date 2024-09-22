import React, { useState, useEffect } from "react";
import axios from "axios";
import Divider from "@mui/material/Divider";

import NewAlbum from "./NewAlbum";
import Songs from "./Songs";

const Albums = () => {
  const [topAlbumData, setTopAlbumData] = useState([]);
  const [newAlbumData, setNewAlbumData] = useState([]);
  const [allSongs, setAllSongs] = useState([]);
  const [allGenres, setAllGenres] = useState([]);

  useEffect(() => {
    const fetchAlbum = async () => {
      try {
        const [topAlbum, newAlbum, allSong,allGenre] = await Promise.allSettled([
          axios.get("https://qtify-backend-labs.crio.do/albums/top"),
          axios.get("https://qtify-backend-labs.crio.do/albums/new"),
          axios.get("https://qtify-backend-labs.crio.do/songs"),
          axios.get("https://qtify-backend-labs.crio.do/genres"),
        ]);
        if (topAlbum.status === "fulfilled") {
          setTopAlbumData(topAlbum.value.data);
        } else {
          console.error("Cannot fetch top albums");
        }
        if (newAlbum.status === "fulfilled") {
          setNewAlbumData(newAlbum.value.data);
        } else {
          console.error("Cannot fetch new albums");
        }
        if (allSong.status === "fulfilled") {
          setAllSongs(allSong.value.data);
        } else {
          console.error("Cannot fetch any song");
        }
        if (allGenre.status === "fulfilled") {
          setAllGenres(allGenre.value.data);
        } else {
          console.error("Cannot fetch any genre");
        }
      } catch (error) {
        console.error("Something went wrong...Please try after sometime");
      }
    };
    fetchAlbum();
  }, []);

  const dividerStyle = {
    width: "100%",
    border: "1px solid",
    borderColor: "divider",
    backgroundColor: "#34c94b",
  };

  return (
    <div>
      <NewAlbum title="Top Albums" albumData={topAlbumData} />
      <Divider component="div" sx={dividerStyle} />
      <NewAlbum title="New Albums" albumData={newAlbumData} />
      <Divider component="div" sx={dividerStyle} />
      <Songs songsData={allSongs} title="Songs" allGenre={allGenres}/>
    </div>
  );
};

export default Albums;
