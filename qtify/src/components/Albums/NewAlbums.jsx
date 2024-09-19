import { Box, Grid2 } from "@mui/material";
import React from "react";
import Cards from "../Cards/Cards";
import Section from "../Section/Section";
import styles from "./Albums.module.css";

const NewAlbums = ({ newAlbumData, title }) => {
  return (
    <Box className={styles.card_container}>
      <Section title={title} />
      <Grid2
        container
        justifyContent="flex-start"
        spacing={4}
        marginBottom="30px"
      >
        {newAlbumData.length > 0 &&
          newAlbumData.map((item) => {
            return (
              <Grid2 item key={item.id}>
                <Cards data={item} />
              </Grid2>
            );
          })}
      </Grid2>
    </Box>
  );
};

export default NewAlbums;
