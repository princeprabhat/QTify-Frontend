import { Box, Grid2 } from "@mui/material";
import React from "react";
import { useState } from "react";
import Cards from "../Cards/Cards";
import Carousel from "../Carousel/Carousel";
import Section from "../Section/Section";
import styles from "./Albums.module.css";

const NewAlbum = ({ albumData, title }) => {
  const [isToggled, setIsToggled] = useState(false);
  const toggleGrid = () => {
    setIsToggled(!isToggled);
  };
  return (
    <Box className={styles.card_container}>
      <Section
        title={title}
        onToggle={toggleGrid}
        btnText={isToggled ? "Show all" : "Collapse"}
      />
      {isToggled ? (
        <Carousel data={albumData} />
      ) : (
        <Grid2
          container
          justifyContent="space-between"
          spacing={4}
          marginBottom="30px"
        >
          {albumData.length > 0 &&
            albumData.map((data) => {
              return (
                <Grid2
                  // size={{ sm: 4, md: 3, lg: 12 / 5, xl: 2 }}
                  key={data.id}
                >
                  <Cards data={data} />
                </Grid2>
              );
            })}
        </Grid2>
      )}
    </Box>
  );
};

export default NewAlbum;
