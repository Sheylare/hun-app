import React from "react";
import { Card, CardMedia, Button, CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";
import "./CustomCard.css";

const CustomCard = ({ id, image }) => {
  return (
    <Card className="custom-card">
      <CardActionArea
        sx={{
          backgroundImage: `url(${image})`,
          backgroundPosition: "center center",
          backgroundSize: "cover",
          height: "170px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          alignItems: "flex-start",
        }}
        component={Link}
        to={`/nailart/${id}`}
      >
        <Button sx={{ color: "#800000", fontSize: "0.8rem"}} variant="text" className="custom-card-button">
          Ver más detalles
        </Button>
      </CardActionArea>
    </Card>
  );
};

export default CustomCard;
