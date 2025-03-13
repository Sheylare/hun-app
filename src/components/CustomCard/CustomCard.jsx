import React from "react";
import { Card, CardMedia, Button, CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";
import "./CustomCard.css";

const CustomCard = ({ id, image }) => {
  return (
    <Card className="custom-card" sx={{ width: "100%", height: "9rem" }}>
      <CardActionArea
        sx={{
          backgroundImage: `url(${image})`,
          backgroundPosition: "center center",
          backgroundSize: "cover",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          alignItems: "flex-start",
          paddingLeft: "1rem"
        }}
        component={Link}
        to={`/nailart/${id}`}
      >
        <Button sx={{ color: "#4b0101", fontSize: "0.7rem"}} variant="text" className="custom-card-button">
          Ver más
        </Button>
      </CardActionArea>
    </Card>
  );
};

export default CustomCard;
