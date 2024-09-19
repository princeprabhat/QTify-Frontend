import React, { useState, useEffect } from "react";
import axios from "axios";

import Section from "../Section/Section";
import { Box, Grid } from "@mui/system";
import Cards from "../Cards/Cards";
import styles from "./TopAlbums.module.css";

const TopAlbums = () => {
  const [albumData, setAlbumData] = useState([]);

  useEffect(() => {
    const fetchAlbum = async () => {
      try {
        const { data } = await axios.get(
          "https://qtify-backend-labs.crio.do/albums/top"
        );

        setAlbumData(data);
      } catch (error) {
        return;
      }
    };
    fetchAlbum();
  }, []);

  return (
    <Box className={styles.card_container}>
      <Section title="Top Albums" />
      <Grid container justifyContent="flex-start" spacing={4}>
        {albumData.length > 0 &&
          albumData.map((item) => {
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
