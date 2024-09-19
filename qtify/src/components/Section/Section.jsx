import { Box, Typography } from "@mui/material";
import React from "react";
import styles from "./Section.module.css";

const Section = ({ title }) => {
  return (
    <Box display="flex" justifyContent="space-between" marginY="20px">
      <Typography
        variant="body1"
        sx={{
          fontSize: "20px",
          fontWeight: "600",
          lineHeight: "30px",
          color: "#ffffff",
        }}
      >
        Top Albums
      </Typography>
      <button className={styles.toggle_btn}>Collapse</button>
    </Box>
  );
};

export default Section;
