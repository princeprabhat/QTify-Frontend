import React, { useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { useData } from "../../DataContext";
import { Box, Typography } from "@mui/material";
// import Button from "../Button/Button";
import style from "./AlbumPage.module.css";
import SongList from "./SongList";
const calculatePlayTime = (songs) => {
  const totalMs = songs?.reduce((total, song) => total + song.durationInMs, 0);
  const totalMin = Math.floor(totalMs / 60000);
  const totalHr = Math.floor(totalMin / 60);
  const remMinutes = totalMin % 60;
  return `${totalHr} hr ${remMinutes} min`;
};
const AlbumPage = () => {
  const { slug } = useParams();
  const { data } = useData();

  const albumData = [...data?.topAlbumData, ...data?.newAlbumData].find(
    (val) => val.slug === slug
  );

  const totalTime = useMemo(() => {
    return calculatePlayTime(albumData?.songs);
  }, [albumData]);
  console.log(totalTime);

  console.log("data from Album page", albumData);
  return (
    <>
      <Box m="50px">
        <Box display="flex" maxWidth="1009px" gap="30px">
          <Box>
            <img
              src={albumData?.image}
              alt={albumData?.slug}
              height="329px"
              width="288px"
              style={{ borderRadius: "20px" }}
            />
          </Box>
          <Box sx={{ color: "white", alignContent: "center" }}>
            <Typography
              sx={{ fontSize: "40px", fontWeight: "600", lineHeight: "60px" }}
            >
              {albumData?.title}
            </Typography>
            <Typography
              sx={{ fontSize: "20px", fontWeight: "400", lineHeight: "30px" }}
            >
              {albumData?.description}
            </Typography>
            <Typography
              sx={{ fontSize: "20px", fontWeight: "400", lineHeight: "30px" }}
            >
              {albumData?.songs?.length} Songs {"\u2022"} {totalTime} {"\u2022"}{" "}
              {albumData?.follows} Follows
            </Typography>
            <Box display={"flex"} gap={"25px"} mt={"15px"}>
              <Box className={style.btn_shuffle}>
                <img src={require("../../assets/shuffleIcon.png")} />
                <span>Shuffle</span>
              </Box>
              <Box className={style.btn_library}>
                <img src={require("../../assets/libraryIcon.png")} />

                <span>Add to library</span>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box m={"50px"}>
        <Box className={style.song_heading}>
          <span>Title</span>
          <span>Artist</span>
          <span>Duration</span>
        </Box>
        <Box mt={"30px"}>
          {albumData?.songs?.map((song) => {
            return <SongList song={song} key={song?.id} />;
          })}
        </Box>
      </Box>
    </>
  );
};

export default AlbumPage;
