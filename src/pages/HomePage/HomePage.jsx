import React from "react";
import "./HomePage.css";
import Galeria from "../../components/CustomMaterialUiComponents/Galeria";
import ServiceCards from "../../components/CustomMaterialUiComponents/ServiceCards";
import HeroSection from "../../components/HeroSection/HeroSection";
import Map from "../../components/MapLocation/Map";
import ColaboracionSlider from "../../components/ColaboracionSlider/ColaboracionSlider";
import CircularText from "../../components/CircularText/CircularText";
import AboutMe from "../../assets/images/aboutImg.jpg";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import giftCard1 from "../../assets/images/giftCard1.jpeg";
import giftCard2 from "../../assets/images/giftCard2.jpeg";
import giftCard3 from "../../assets/images/giftCard3.jpeg";
import giftCard4 from "../../assets/images/giftCard4.jpeg";
import { Container, Grid2 } from "@mui/material";

function HomePage() {

  return (
    <div>
      <div className="pressOn-section">
        <HeroSection />
      </div>
      <div className="galeria-section">
        <h2>Magia y Fantasía </h2>
        <h3>En tus Uñas</h3>
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
      <div>
        <Map/>
      </div>
    </div>
  );
}

export default HomePage;
