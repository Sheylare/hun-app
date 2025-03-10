import React from "react";
import "./NailArtPage.css";
import nails6 from "../../assets/images/nails6.jpg";
import nails7 from "../../assets/images/nails7.jpg";
import nails8 from "../../assets/images/nails8.jpg";
import nails9 from "../../assets/images/nails9.jpg";
import { Link, useParams } from "react-router-dom";
import { Button, Container, Typography } from "@mui/material";

function NailArtDetailsPage() {
  const nailArtData = [
    {
      id: 1,
      title: "Francesa con diseño",
      image: nails6,
      description: "Descripción del diseño 1",
    },
    {
      id: 2,
      title: "Diseño 2",
      image: nails7,
      description: "Descripción del diseño 2",
    },
    {
      id: 3,
      title: "Diseño 3",
      image: nails8,
      description: "Descripción del diseño 3",
    },
    {
      id: 4,
      title: "Diseño 4",
      image: nails9,
      description: "Descripción del diseño 4",
    },
  ];

  const { id } = useParams();
  const item = nailArtData.find((item) => item.id === parseInt(id));

  if (!item) {
    return <Typography variant="h6">Diseño no encontrado</Typography>;
  }

  return (
    <Container className="nail-art-details-container">
      <img
        src={item.image}
        alt={item.title}
        style={{ width: "75%", height: "auto" }}
      />
      <Typography
        gutterBottom
        sx={{ fontSize: "1rem", fontFamily: "Impact", padding: "1rem 0rem" }}
      >
        {item.title}
      </Typography>

      <Typography variant="body1" gutterBottom>
        Descripción: {item.description}
      </Typography>
      <Button
        component={Link}
        to="/nailart"
        sx={{
          marginTop: "1.2rem",
          border: "1px solid #800000",
          borderRadius: "10px",
          color: "#800000",
          width: {
            xs: "40.5%",
            md: "5rem",
          },
          padding: "0.2rem 1rem",
          backgroundColor: "transparent",
          fontSize: "0.85rem",
          letterSpacing: "0.11rem",
          fontFamily: "Impact",
          textTransform: "capitalize",
          cursor: "pointer",
          transition: "color 0.5s ease, transform 0.3s ease",
          ":hover": {
            color: "#800000",

            transform: "translateY(-4px)",
          },
          ":active": {
            transform: "translateY(-1px)",
          },
        }}
      >
        NailArt
      </Button>
    </Container>
  );
}

export default NailArtDetailsPage;
