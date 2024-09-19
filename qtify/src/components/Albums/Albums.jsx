import React, { useState, useEffect } from "react";
import axios from "axios";

import Section from "../Section/Section";
import { Box, Grid } from "@mui/system";
import Cards from "../Cards/Cards";
import styles from "./Albums.module.css";

const TopAlbums = () => {
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
        }
        if (newAlbum.status === "fulfilled") {
          setNewAlbumData(newAlbum.value.data);
        }
      } catch (error) {
        console.error("Something went wrong...Please try after sometime");
      }
    };
    fetchAlbum();
  }, []);

  return (
    <Box className={styles.card_container}>
      <Section title="Top Albums" />
      <Grid
        container
        justifyContent="flex-start"
        spacing={4}
        marginBottom="30px"
      >
        {topAlbumData.length > 0 &&
          topAlbumData.map((item) => {
            return (
              <Grid item key={item.id}>
                <Cards data={item} />
              </Grid>
            );
          })}
      </Grid>

      <Section title="New Albums" />
      <Grid
        container
        justifyContent="flex-start"
        spacing={4}
        marginBottom="30px"
      >
        {newAlbumData.length > 0 &&
          newAlbumData.map((item) => {
            return (
              <Grid item key={item.id}>
                <Cards data={item} />
              </Grid>
            );
          })}
      </Grid>
    </Box>
  );
};

export default TopAlbums;
