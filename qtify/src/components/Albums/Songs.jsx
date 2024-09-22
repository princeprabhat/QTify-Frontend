import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import Carousel from "../Carousel/Carousel";
import Section from "../Section/Section";
import styles from "./Albums.module.css";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
// import axios from "axios";

const Songs = ({ songsData, title, allGenre }) => {
  const [value, setValue] = useState("All");
  const [songList, setSongList] = useState([]);

  const handleValue = (event, newValue) => {
    setValue(newValue);
    console.log(event);
  };

  useEffect(() => {
    if (value === "All") {
      setSongList(songsData);
    } else {
      const filteredSongs = songsData.filter(
        (song) => song?.genre?.label === value
      );
      console.log(filteredSongs);
      setSongList(filteredSongs);
    }
  }, [value, songsData]);

  return (
    <Box className={styles.card_container}>
      <Section title={title} hasBtn={false} />
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          width: "100%",

          marginBottom: "20px",
          marginTop: "-10px",
        }}
      >
        <Tabs
          value={value}
          onChange={handleValue}
          textColor="#fff"
          aria-label="Genres Tab"
          sx={{
            "& .MuiTabs-indicator": {
              backgroundColor: "#34c94b",
              height: "3px",
              marginBottom: "4px",
            },
            "& .MuiTab-root": {
              color: "white",
            },
          }}
        >
          <Tab label="All" key="all" value="All" />
          {allGenre?.data?.length > 0 &&
            allGenre?.data?.map((el) => {
              return <Tab label={el.label} key={el.key} value={el.label} />;
            })}
        </Tabs>
      </Box>

      <Carousel data={songList} />
    </Box>
  );
};

export default Songs;
