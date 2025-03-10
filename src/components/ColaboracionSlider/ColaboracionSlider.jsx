import React from "react";
import { motion } from "framer-motion";
import "./ColaboracionSlider.css";
import img1 from "../../assets/images/manicuristG.webp";
import img2 from "../../assets/images/Staleks.webp";
import img3 from "../../assets/images/manicurist.webp";
import img4 from "../../assets/images/lafigy.jpeg";

function ColaboracionSlider() {
  const colaboraciones = [
    { image: img1, name: "Colaboracion 1" },
    { image: img2, name: "Colaboracion 2" },
    { image: img3, name: "Colaboracion 3" },
    { image: img4, name: "Colaboracion 4" },
  ];

  return (
    <div className="slider-container">
      <motion.div
        className="slider"
        animate={{ x: ["0%", "-100%"] }}
        transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
      >
        {colaboraciones.map((colaboracion, index) => (
          <div key={index} className="slide">
            <img src={colaboracion.image} alt={colaboracion.name} />
            <h3>{colaboracion.name}</h3>
          </div>
        ))}
        {colaboraciones.map((colaboracion, index) => (
          <div key={index + colaboraciones.length} className="slide">
            <img src={colaboracion.image} alt={colaboracion.name} />
            <h3>{colaboracion.name}</h3>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default ColaboracionSlider;
