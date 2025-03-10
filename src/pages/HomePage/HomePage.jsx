import React from "react";
import "./HomePage.css";
import Galeria from "../../components/CustomMaterialUiComponents/Galeria";
import ServiceCards from "../../components/CustomMaterialUiComponents/ServiceCards";
import ColaboracionSlider from "../../components/ColaboracionSlider/ColaboracionSlider";
import CircularText from "../../components/CircularText/CircularText";
import AboutMe from "../../assets/images/aboutImg.jpg";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Aurora from "../../components/Aurora/Aurora";

function HomePage() {
  const auroraStyle = {
    position: "absolute",
    top: "50%", // Centra verticalmente
    left: "50%", // Centra horizontalmente
    transform: "translate(-50%, -50%)", // Ajusta para que esté exactamente en el medio
  };

  return (
    <div>
      <div className="home-section">
        <div style={{ position: "relative", width: "100%", height: "100vh" }}>
          <Aurora
            style={auroraStyle} // Pasar el estilo al componente
            colorStops={["#E6E6FA", "#FF94B4", "#FF3232"]}
            blend={0.5}
            amplitude={0.9}
            speed={0.5}
          />
        </div>
        <div className="home-content">
          <h1>HUN NAILS</h1>
          <h4>Nail Art Studio en Barcelona</h4>
          <Button
            component={Link}
            to="/reserva"
            sx={{
              marginTop: "1.2rem",
              border: "2.5px solid #800000",
              borderRadius: "10px",
              color: "#800000",
              width: {
                xs: "38.5%",
                md: "5rem",
              },
              padding: "0.2rem 3.5rem",
              backgroundColor: "transparent",
              fontSize: "1rem",
              fontWeight: "bolder",
              fontFamily: "Geist Geist Placeholder sans-serif",
              textTransform: "capitalize",
              cursor: "pointer",
              transition: "color 0.5s ease, transform 0.3s ease",
              ":hover": {
                color: "#800000",
                background: "white",
                transform: "translateY(-4px)",
              },
              ":active": {
                transform: "translateY(-1px)",
              },
            }}
          >
            Reserva
          </Button>
        </div>
      </div>
      <div className="galeria-section">
        <h2>Un Poco De </h2>
        <h2>Magia y Fantasía </h2>
        <h3>En Tus Uñas</h3>
        <Galeria />
        <div className="circular-text">
          <CircularText
            text="RESERVA*TU*CITA*"
            onHover="speedUp"
            spinDuration={20}
            className="custom-class"
          />
        </div>
      </div>
      <div className="servicios-section">
        <h2>SERVICIOS</h2>
        <ServiceCards />
      </div>
      <div className="about-section">
        <h2>HUN Studio</h2>
        <img
          src={AboutMe}
          alt=" foto de Andrea y sookie"
          style={{ width: "22rem", height: "auto", paddingBottom: "3rem" }}
        />
        <p>
          Hun Nails es un proyecto que empezó hace unos tres años un poco sin
          querer. Han pasado muchas cosas en este tiempo, pero creo que la
          esencia sigue siendo la misma.
        </p>
        <p>
          Nos encontrareis a Sookie y a mi en nuestro pequeño estudio del barrio
          de Gracia en Barcelona, siempre con ganas de hablar de las cosas que
          nos importan y nos preocupan. Un espacio seguro en el que darte un
          mimo, arreglar tus uñas, probar cosas nuevas y diferentes y además
          echarte unas risas.
        </p>
      </div>
      <div className="colaboraciones-section">
        <h2>Colaboraciones</h2>
        <ColaboracionSlider />
      </div>
    </div>
  );
}

export default HomePage;
