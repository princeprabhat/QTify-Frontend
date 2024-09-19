import { Box, Typography } from "@mui/material";
import React from "react";
import styles from "./Section.module.css";

const Section = ({ title, onToggle, btnText = "Show all" }) => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      marginY="20px"
    >
      <Typography
        variant="body1"
        sx={{
          fontSize: "20px",
          fontWeight: "600",
          lineHeight: "30px",
          color: "#ffffff",
        }}
      >
        {title}
      </Typography>
      <button className={styles.toggle_btn} onClick={onToggle}>
        {btnText}
      </button>
    </Box>
  );
};

export default Section;
