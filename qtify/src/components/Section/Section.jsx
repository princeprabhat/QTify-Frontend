import { Box, Typography } from "@mui/material";
import React from "react";
import Button from "../Button/Button";

const Section = ({ title, onToggle, btnText = "Show all", hasBtn = true }) => {
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

      {hasBtn && (
        <Button onClick={onToggle} variant="text">
          {btnText}
        </Button>
      )}
    </Box>
  );
};

export default Section;
