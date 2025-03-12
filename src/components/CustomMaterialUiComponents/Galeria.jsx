import React from "react";
import Slider from "react-slick";
import { Paper } from "@mui/material";
import nails1 from "../../assets/images/nails1.jpeg";
import nails2 from "../../assets/images/nails2.jpeg";
import nails3 from "../../assets/images/nails3.jpeg";
import nails4 from "../../assets/images/nails4.jpeg";
import nails5 from "../../assets/images/nails5.jpeg";
import nails6 from "../../assets/images/nails6.jpg";
import nails7 from "../../assets/images/nails7.jpg";
import nails8 from "../../assets/images/nails8.jpg";
import nails9 from "../../assets/images/nails9.jpg";  
import nails10 from "../../assets/images/nails10.jpg";  

const imagenes = [
  { id: 1, src: nails1, alt: "Descripción de la imagen 1" },
  { id: 2, src: nails2, alt: "Descripción de la imagen 2" },
  { id: 3, src: nails3, alt: "Descripción de la imagen 3" },
  { id: 4, src: nails4, alt: "Descripción de la imagen 4" },
  { id: 5, src: nails5, alt: "Descripción de la imagen 5" },
];

const imagenes2 = [
  { id: 6, src: nails6, alt: "Descripción de la imagen 1" },
  { id: 7, src: nails7, alt: "Descripción de la imagen 2" },
  { id: 8, src: nails8, alt: "Descripción de la imagen 3" },
  { id: 9, src: nails9, alt: "Descripción de la imagen 4" },
  { id: 10, src: nails10, alt: "Descripción de la imagen 5" },
];

const Galeria = () => {
  const settings = {
    dots: false, 
    arrows: false, 
    infinite: true,
    speed: 500,
    slidesToShow: 2, // Mostrar dos imágenes a la vez
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2, 
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2, 
          slidesToScroll: 1
        }
      }
    ]
  };

  const settingsRtl = {
    ...settings,
    rtl: true 
  };

  return (
    <Paper
    elevation={0}
    style={{ maxWidth: "1000px", height: "auto", margin: "auto", backgroundColor: '#F8E8E8' }}
  >
    <Slider {...settings}>
      {imagenes.map((imagen) => (
        <div key={imagen.id} style={{ display: "flex", flexDirection: "row", alignContent:"center",  boxSizing: "border-box" }}>
          <img
            src={imagen.src}
            alt={imagen.alt}
            style={{ width: "99%", height: "19rem", objectFit: "cover" }} 
          />
        </div>
      ))}
    </Slider>
    <Slider {...settingsRtl}>
      {imagenes2.map((imagen) => (
        <div key={imagen.id} style={{ padding: "0 0.5rem", boxSizing: "border-box", margin: "0 10px" }}>
          <img
            src={imagen.src}
            alt={imagen.alt}
            style={{ width: "99%", height: "300px", objectFit: "cover" }} 
          />
        </div>
      ))}
    </Slider>
  </Paper>
  );
};

export default Galeria;