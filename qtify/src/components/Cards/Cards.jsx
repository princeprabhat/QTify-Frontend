import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import Chip from "@mui/material/Chip";
// import styles from "./Cards.module.css";

const Cards = ({ data }) => {
  return (
    <Card
      sx={{
        maxWidth: "159px",
        backgroundColor: "inherit",
        minHeight: "232px",
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="170px"
          image={data?.image}
          alt={data?.title}
          sx={{
            borderRadius: "10px 10px 0px 0px",
            aspectRatio: "1",
            objectFit: "cover",
          }}
        />

        <CardContent
          sx={{
            backgroundColor: "white",
            borderRadius: "0px 0px 10px 10px",
            padding: "5px",
          }}
        >
          <Chip
            label={data?.follows + " Follows"}
            // className={styles.card_chip}
            sx={{
              fontSize: "10px",
              height: "23px",
              color: "#ffffff",
              background: "#121212",
              fontWeight: "400",
              lineHeight: "15px",
            }}
          />
        </CardContent>
      </CardActionArea>

      <Typography
        gutterBottom
        variant="body1"
        component="div"
        sx={{
          fontSize: "14px",
          lineHeight: "21px",
          color: "#ffffff",
          marginBottom: 0,
          paddingTop: "5px",
        }}
      >
        {data?.title}
      </Typography>
    </Card>
  );
};

export default Cards;
