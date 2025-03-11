import React from "react";
import "./HomePage.css";
import Galeria from "../../components/CustomMaterialUiComponents/Galeria";
import ServiceCards from "../../components/CustomMaterialUiComponents/ServiceCards";
import PressOnSection from "../../components/Press0nSection/PressOnSection";

import ColaboracionSlider from "../../components/ColaboracionSlider/ColaboracionSlider";
import CircularText from "../../components/CircularText/CircularText";
import AboutMe from "../../assets/images/aboutImg.jpg";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Aurora from "../../components/Aurora/Aurora";
import GradientText from "../../components/ReservaButton/GradientText";
import giftCard1 from "../../assets/images/giftCard1.jpeg";
import giftCard2 from "../../assets/images/giftCard2.jpeg";
import giftCard3 from "../../assets/images/giftCard3.jpeg";
import giftCard4 from "../../assets/images/giftCard4.jpeg";
import { Container, Grid2 } from "@mui/material";

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
            colorStops={["#f3d2d2", "#FF94B4", "#9E2A2A"]}
            blend={0.5}
            amplitude={0.9}
            speed={0.5}
          />
        </div>
        <div className="home-content">
          <h1>HUN NAILS</h1>
          <h3 className="roboto-font">STUDIO</h3>
          <h4 className="roboto-font">Nail Art en Barcelona</h4>
          <GradientText
            colors={["#800000", "#C97575", "#800000", "#C97575", "#800000"]}
            animationSpeed={6}
            showBorder={false}
            className="reserva-button roboto-font"
          >
            Reserva
          </GradientText>
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
        {/* <h2>SERVICIOS</h2> */}
        <ServiceCards />
      </div>
      <div className="pressOn-section">
        <PressOnSection />
      </div>
      <div className="giftCard-section">
      <h2>Gift Card</h2>
        <Grid2 container columns={2} spacing={2} justifyContent={"center"}>
          <img src={giftCard1} alt="gift card 1"/>
          <img src={giftCard2} alt="gift card 2" />
          <img src={giftCard3} alt="gift card 3" />
          <img src={giftCard4} alt="gift card 4" />
        </Grid2>
        <Container className="giftCard-text roboto-font">
          <h3>¿Quieres regalar algo especial?</h3>
          <p>Regala una experiencia a tus amigues, pareja o familiares.</p>
        </Container>
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
