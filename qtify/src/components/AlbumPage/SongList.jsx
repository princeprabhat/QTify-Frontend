import { Box, Typography } from "@mui/material";
import { useMemo } from "react";

const getSongDuration = (duration) => {
  const totalMin = Math.floor(duration / 60000);
  const remSec = Math.floor((duration % 60000) / 1000);
  return `${totalMin}:${remSec.toString().padStart(2, "0")}`;
};
const SongList = ({ song }) => {
  const getTime = useMemo(() => {
    return getSongDuration(song?.durationInMs);
  }, [song?.durationInMs]);
  return (
    <>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        borderBottom={"1px solid white"}
        alignItems={"center"}
        pb={"10px"}
        mb={"10px"}
        sx={{ cursor: "pointer" }}
      >
        <Box
          alignItems={"center"}
          display={"flex"}
          //   width={"154px"}
          gap={"10px"}
          flex={"1 1 0"}
        >
          <img
            src={song?.image}
            alt=""
            style={{
              width: "59px",
              height: "64px",
              borderRadius: "4px",
              aspectRatio: "1",
            }}
          />
          <Typography color="white" fontSize={"14px"}>
            {song?.title}
          </Typography>
        </Box>
        <Typography color="white" fontSize={"14px"} flex={"1 1 0"}>
          {song?.artists?.[0]}
        </Typography>

        <Typography color="white" fontSize={"14px"}>
          {getTime}
        </Typography>
      </Box>
    </>
  );
};

export default SongList;
