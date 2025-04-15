import { Box, Typography } from "@mui/material";
import React from "react";
import style from "./Player.module.css";
import { ReactComponent as PlayButton } from "../../assets/play-btn.svg";
import { ReactComponent as PauseButton } from "../../assets/pause-btn.svg";
const Player = () => {
  return (
    <Box className={style.player_container}>
      <Box display={"flex"} alignItems={"center"} gap={"10px"}>
        <img src="" alt="" className={style.album_img_player} />
        <Box>
          <Typography variant="body1" color="white">
            Song name
          </Typography>
          <Typography variant="body1" color="white">
            Album name
          </Typography>
        </Box>
      </Box>

      <Box margin={"0 auto"}>
        <Box className={style.control_btn_container}>
          {<PlayButton /> || <PauseButton />}
        </Box>
        <Box className={style.media_player}>
          <span>ST</span>
          <Box className={style.progress_bar_container}>
            <Box className={style.progress_bar}></Box>
          </Box>
          <span>ET</span>
        </Box>
      </Box>
    </Box>
  );
};

export default Player;
