import { Box, Button } from "@mui/material";
import React from "react";
import videoSrc from "../../assets/videos/pressOn.mp4";
import "./HeroSection.css";
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <Box
      sx={{
        overflow: "hidden",
        height: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <video
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          minWidth: "100%",
          minHeight: "100%",
          width: "100%",
          height: "100%",
          zIndex: -1,
          transform: "translate(-50%, -50%)",
          objectFit: "cover",
        }}
      >
        <source src={videoSrc} type="video/mp4" />
        Tu navegador no soporta el video.
      </video>
      <div className="home-content">
        <h1>HUN NAILS</h1>
        <h3 className="roboto-font">STUDIO</h3>
        <div className="reserva-button-container">
          <Button component={Link} to="/reserva"
            sx={{
              marginTop: "2.1rem",
              border: "1px solid #800000",
              borderRadius: "7px",
              color: "#800000",
              width: {
                xs: "35%",
                md: "5rem",
              },
              fontSize: "0.65rem",
              backgroundColor: "transparent",
              fontWeight: "bolder",
              textTransform: "uppercase",
              cursor: "pointer",
              transition: "color 0.5s ease, transform 0.3s ease",
              ":hover": {
                // color: "#800000",
                transform: "translateY(-4px)",
              },
            }}
            
          >
            Pide tu cita
          </Button>
        </div>
      </div>
    </Box>
  );
}

export default HeroSection;
