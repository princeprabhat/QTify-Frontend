import React, { useState, useEffect } from "react";
import axios from "axios";
import Divider from "@mui/material/Divider";
import TopAlbums from "./TopAlbums";
import NewAlbums from "./NewAlbums";

const Albums = () => {
  const [topAlbumData, setTopAlbumData] = useState([]);
  const [newAlbumData, setNewAlbumData] = useState([]);

  useEffect(() => {
    const fetchAlbum = async () => {
      try {
        const [topAlbum, newAlbum] = await Promise.allSettled([
          axios.get("https://qtify-backend-labs.crio.do/albums/top"),
          axios.get("https://qtify-backend-labs.crio.do/albums/new"),
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
      <TopAlbums title="Top Albums" topAlbumData={topAlbumData} />
      <Divider component="div" sx={dividerStyle} />
      <NewAlbums title="New Albums" newAlbumData={newAlbumData} />
      <Divider component="div" sx={dividerStyle} />
    </div>
  );
};

export default Albums;
